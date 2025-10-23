/**
 * Service: Award Points (Gamificação)
 *
 * Responsável por criar eventos de pontos de forma idempotente.
 * Usa metaHash (SHA256) para detectar duplicatas.
 *
 * Exemplo:
 *   await awardPoints({
 *     userId: 'user-id',
 *     type: 'POST_CREATED',
 *     points: 10,
 *     meta: { postId: 'post-id' }
 *   });
 */

import { createHash } from 'crypto';
import { prisma } from '@/lib/prisma';

/**
 * Normaliza metadados (remove undefined, ordena keys)
 */
function normalizeMeta(meta: unknown): Record<string, any> {
  if (!meta || typeof meta !== 'object') return {};
  const obj = meta as Record<string, any>;
  // Remove values que são undefined ou null
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v != null));
}

/**
 * Calcula hash SHA256 dos metadados (idempotência)
 */
function getMetaHash(meta: unknown): string {
  const normalized = normalizeMeta(meta);
  const sorted = Object.keys(normalized).sort();
  const stringified = JSON.stringify(sorted.map((k) => [k, normalized[k]]));
  return createHash('sha256').update(stringified).digest('hex');
}

export interface AwardPointsParams {
  userId: string;
  type: 'POST_CREATED' | 'PROFILE_COMPLETED' | 'DAILY_CHECKIN';
  points: number;
  meta?: Record<string, any>;
}

export interface PointsResponse {
  balance: number;
  activities: any[];
}

/**
 * Award pontos para usuário de forma idempotente
 * 
 * Se o evento já existe (mesmo metaHash), retorna os dados existentes sem duplicar.
 * 
 * @throws Error se userId/type forem inválidos ou se houver erro no BD
 */
export async function awardPoints(params: AwardPointsParams): Promise<PointsResponse> {
  // Validar entrada
  if (!params.userId || typeof params.userId !== 'string') {
    throw new Error('Invalid userId');
  }
  if (!params.type || typeof params.type !== 'string') {
    throw new Error('Invalid type');
  }
  if (typeof params.points !== 'number' || params.points < 0) {
    throw new Error('Invalid points (must be number >= 0)');
  }

  const metaHash = getMetaHash(params.meta);
  const normalizedMeta = normalizeMeta(params.meta);

  try {
    // Tentar criar evento
    await prisma.pointEvent.create({
      data: {
        userId: params.userId,
        type: params.type,
        points: params.points,
        meta: normalizedMeta,
        metaHash,
      },
    });
  } catch (error: any) {
    // P2002 = unique constraint violation (duplicata)
    // Idempotência: já existe, não é erro. Apenas continuar.
    if (error?.code !== 'P2002') {
      console.error('❌ PointEvent creation error:', error);
      throw error;
    }
    // Log que foi duplicata
    console.log(`⚠️  PointEvent duplicado: userId=${params.userId} type=${params.type} metaHash=${metaHash}`);
  }

  // Retornar saldo atualizado + últimas atividades
  const [balance, activities] = await Promise.all([
    prisma.pointEvent.aggregate({
      _sum: { points: true },
      where: { userId: params.userId },
    }),
    prisma.pointEvent.findMany({
      where: { userId: params.userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    }),
  ]);

  return {
    balance: balance._sum.points ?? 0,
    activities: activities.map((a: typeof activities[0]) => ({
      ...a,
      meta: a.meta ?? {},
    })),
  };
}

/**
 * Obter perfil do usuário com saldo + atividades
 */
export async function getUserProfile(userId: string) {
  const [user, balance, activities] = await Promise.all([
    prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true },
    }),
    prisma.pointEvent.aggregate({
      _sum: { points: true },
      where: { userId },
    }),
    prisma.pointEvent.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    }),
  ]);

  return {
    user,
    balance: balance._sum.points ?? 0,
    activities: activities.map((a: typeof activities[0]) => ({
      ...a,
      meta: a.meta ?? {},
    })),
  };
}
