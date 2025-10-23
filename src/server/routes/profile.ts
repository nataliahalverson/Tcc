/**
 * Routes: Profile (Perfil do Usuário)
 *
 * GET /users/me        → Obter perfil do usuário autenticado
 * GET /users/me/points → Obter saldo + histórico de pontos
 * PUT /users/me        → Atualizar perfil (name, email)
 */

import type { Router, Request, Response } from 'express';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '../middleware/auth';
import { getUserProfile } from '../services/pointsService';

export function setupProfileRoutes(router: Router) {
  /**
   * GET /users/me
   * Obter perfil do usuário autenticado
   */
  router.get('/users/me', requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.userId!;
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, email: true, name: true },
      });

      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }

      res.json({ user });
    } catch (error) {
      console.error('Get profile error:', error);
      res.status(500).json({ message: 'internal server error' });
    }
  });

  /**
   * GET /users/me/points
   * Obter saldo total + histórico de eventos (últimos 50)
   */
  router.get(
    '/users/me/points',
    requireAuth,
    async (req: Request, res: Response) => {
      try {
        const userId = req.userId!;
        const profile = await getUserProfile(userId);
        res.json({
          balance: profile.balance,
          activities: profile.activities,
        });
      } catch (error) {
        console.error('Get points error:', error);
        res.status(500).json({ message: 'internal server error' });
      }
    }
  );

  /**
   * PUT /users/me
   * Atualizar perfil do usuário
   */
  router.put('/users/me', requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.userId!;
      const { name, email } = req.body;

      // Validações mínimas
      const updateData: any = {};
      if (name) updateData.name = name;
      if (email) {
        // Verificar se email já está em uso
        const existing = await prisma.user.findUnique({
          where: { email },
        });
        if (existing && existing.id !== userId) {
          return res.status(409).json({ message: 'email already in use' });
        }
        updateData.email = email;
      }

      if (Object.keys(updateData).length === 0) {
        return res.status(400).json({ message: 'nothing to update' });
      }

      const user = await prisma.user.update({
        where: { id: userId },
        data: updateData,
      });

      res.json({
        user: { id: user.id, email: user.email, name: user.name },
      });
    } catch (error) {
      console.error('Update profile error:', error);
      res.status(500).json({ message: 'internal server error' });
    }
  });
}
