/**
 * Servidor Express API
 *
 * Responsável por:
 * - Autenticação (login, register, logout, me)
 * - Posts (CRUD)
 * - Profile (perfil + pontos)
 * - Pontos (idempotente via metaHash)
 *
 * Porta: 4000 (padrão, configurável via PORT env)
 */

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { prisma } from '@/lib/prisma';
import { setupAuthRoutes } from './routes/auth';
import { setupPostsRoutes } from './routes/posts';
import { setupProfileRoutes } from './routes/profile';

const app = express();

// ===== Segurança =====
app.use(helmet()); // Headers de segurança
app.use(compression()); // Gzip responses

// ===== Trust Proxy (Produção) =====
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

// ===== Middleware =====
app.use(
  cors({
    origin: process.env.WEB_ORIGIN || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.json());
app.use(cookieParser());

// ===== Rate Limiting =====
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // 100 requisições por IP
  message: 'Muitas tentativas. Tente novamente mais tarde.',
  standardHeaders: true,
  legacyHeaders: false,
});

// ===== Health Check (com teste de DB) =====
app.get('/health', async (_req, res) => {
  try {
    // Testa conexão Prisma
    await prisma.$queryRaw`SELECT 1`;

    return res.status(200).json({
      ok: true,
      db: true,
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV,
    });
  } catch (error: any) {
    return res.status(500).json({
      ok: false,
      db: false,
      error: error.message,
    });
  }
});

// ===== Routes =====
const router = express.Router();

// Rate limit no auth
router.use('/auth/register', authLimiter);
router.use('/auth/login', authLimiter);

setupAuthRoutes(router);
setupPostsRoutes(router);
setupProfileRoutes(router);
app.use(router);

// ===== Error Handling Global (DEVE ser último) =====
app.use((err: any, _req: any, res: any, _next: any) => {
  const status = err?.status || err?.statusCode || 500;
  const message =
    status === 500
      ? 'internal_error'
      : err?.message || 'unknown_error';

  console.error(`[ERROR] ${status}: ${message}`, err);

  return res.status(status).json({
    error: message,
    ...(process.env.NODE_ENV !== 'production' && { details: err.toString() }),
  });
});

// 404 catch-all
app.use((_req, res) => {
  res.status(404).json({ error: 'not_found' });
});

// ===== Start Server =====
const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  console.log(`🚀 API server running on http://localhost:${port}`);
  console.log(`📡 CORS origin: ${process.env.WEB_ORIGIN || 'http://localhost:3000'}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🗄️  Database: ${process.env.DATABASE_URL ? '✅ Connected' : '❌ Not configured'}`);
});
