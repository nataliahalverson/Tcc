/**
 * Routes: Autenticação
 *
 * POST   /register → Criar usuário
 * POST   /login    → Fazer login
 * POST   /logout   → Fazer logout (limpar cookie)
 * GET    /me       → Obter usuário autenticado
 */

import type { Router, Request, Response } from 'express';
import { z } from 'zod';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '../middleware/auth';

// Validação
const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128),
  name: z.string().min(2).max(100),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function setupAuthRoutes(router: Router) {
  /**
   * Helper: Setar cookie com JWT
   */
  function setCookie(res: Response, userId: string) {
    const token = jwt.sign({ sub: userId }, process.env.JWT_SECRET!, {
      expiresIn: '7d',
    });
    const cookieName = process.env.COOKIE_NAME || 'access_token';
    const secure = process.env.NODE_ENV === 'production';
    res.cookie(cookieName, token, {
      httpOnly: true,
      secure,
      sameSite: 'lax',
      path: '/',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });
  }

  /**
   * POST /auth/register
   * Criar novo usuário
   */
  router.post('/auth/register', async (req: Request, res: Response) => {
    try {
      // Validar entrada
      const parsed = RegisterSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          error: 'Invalid input',
          details: parsed.error.flatten(),
        });
      }

      const { email, password, name } = parsed.data;

      // Verificar se usuário já existe
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        return res.status(409).json({ error: 'user already exists' });
      }

      // Hash password
      const hash = await bcryptjs.hash(password, 10);

      // Criar usuário
      const user = await prisma.user.create({
        data: { email, password: hash, name },
      });

      // Setar cookie
      setCookie(res, user.id);

      res.status(201).json({
        user: { id: user.id, email: user.email, name: user.name },
      });
    } catch (error) {
      console.error('Register error:', error);
      res.status(500).json({ message: 'internal server error' });
    }
  });

  /**
   * POST /auth/login
   * Fazer login com email + senha
   */
  router.post('/auth/login', async (req: Request, res: Response) => {
    try {
      // Validar entrada
      const parsed = LoginSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          error: 'Invalid input',
          details: parsed.error.flatten(),
        });
      }

      const { email, password } = parsed.data;

      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: 'invalid credentials' });
      }

      const passwordMatch = await bcryptjs.compare(
        password,
        (user as any).password
      );
      if (!passwordMatch) {
        return res.status(401).json({ message: 'invalid credentials' });
      }

      setCookie(res, user.id);

      res.json({
        user: { id: user.id, email: user.email, name: user.name },
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'internal server error' });
    }
  });

  /**
   * POST /auth/logout
   * Fazer logout (limpar cookie)
   */
  router.post('/auth/logout', (_req: Request, res: Response) => {
    const cookieName = process.env.COOKIE_NAME || 'access_token';
    res.clearCookie(cookieName, { path: '/' });
    res.json({ ok: true });
  });

  /**
   * GET /auth/me
   * Obter usuário autenticado
   */
  router.get('/auth/me', requireAuth, async (req: Request, res: Response) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.userId! },
      });
      res.json({
        user: user
          ? { id: user.id, email: user.email, name: user.name }
          : null,
      });
    } catch (error) {
      console.error('Get me error:', error);
      res.status(500).json({ message: 'internal server error' });
    }
  });
}
