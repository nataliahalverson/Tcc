/**
 * Routes: Posts (Blog/Diário)
 *
 * POST   /posts     → Criar post (dispara PointEvent)
 * GET    /posts     → Listar posts do usuário
 * GET    /posts/:id → Obter post específico
 * DELETE /posts/:id → Deletar post (apenas owner)
 */

import type { Router, Request, Response } from 'express';
import { z } from 'zod';
import sanitize from 'sanitize-html';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '../middleware/auth';
import { awardPoints } from '../services/pointsService';

// Validação de entrada
const CreatePostSchema = z.object({
  title: z.string().min(3).max(120).trim(),
  content: z.string().min(3).max(10_000).trim(),
});

export function setupPostsRoutes(router: Router) {
  /**
   * POST /posts
   * Criar novo post (protegido)
   * Dispara evento PointEvent (POST_CREATED, 10 pts)
   */
  router.post('/posts', requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.userId!;

      // Validar entrada com Zod
      const parsed = CreatePostSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          error: 'Invalid input',
          details: parsed.error.flatten(),
        });
      }

      const { title, content } = parsed.data;

      // Sanitizar HTML (remove tags perigosas)
      const cleanContent = sanitize(content, {
        allowedTags: ['b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'p', 'br'],
        allowedAttributes: { a: ['href', 'title'] },
      });

      // Criar post
      const post = await prisma.post.create({
        data: {
          title: title.trim(),
          content: cleanContent,
          userId,
        },
      });

      // Award points (não bloqueia resposta)
      awardPoints({
        userId,
        type: 'POST_CREATED',
        points: 10,
        meta: { postId: post.id },
      }).catch((err) => {
        console.error('Failed to award points:', err);
        // Continua mesmo se falhar
      });

      res.status(201).json(post);
    } catch (error: any) {
      console.error('Create post error:', error);
      res.status(500).json({ error: error.message || 'internal server error' });
    }
  });

  /**
   * GET /posts
   * Listar posts do usuário autenticado
   */
  router.get('/posts', requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.userId!;
      const posts = await prisma.post.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      });
      res.json({ posts });
    } catch (error) {
      console.error('List posts error:', error);
      res.status(500).json({ message: 'internal server error' });
    }
  });

  /**
   * GET /posts/:id
   * Obter post específico (apenas owner)
   */
  router.get('/posts/:id', requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.userId!;
      const { id } = req.params;

      const post = await prisma.post.findUnique({ where: { id } });
      if (!post || post.userId !== userId) {
        return res.status(404).json({ message: 'not found' });
      }

      res.json({ post });
    } catch (error) {
      console.error('Get post error:', error);
      res.status(500).json({ message: 'internal server error' });
    }
  });

  /**
   * DELETE /posts/:id
   * Deletar post (apenas owner)
   */
  router.delete('/posts/:id', requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.userId!;
      const { id } = req.params;

      const post = await prisma.post.findUnique({ where: { id } });
      if (!post || post.userId !== userId) {
        return res.status(404).json({ message: 'not found' });
      }

      await prisma.post.delete({ where: { id } });
      res.json({ ok: true });
    } catch (error) {
      console.error('Delete post error:', error);
      res.status(500).json({ message: 'internal server error' });
    }
  });
}
