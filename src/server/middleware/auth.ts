/**
 * Middleware: Autenticação via JWT (cookie httpOnly)
 * Verifica se token existe e é válido
 * Define req.userId para uso em rotas protegidas
 */

import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const cookieName = process.env.COOKIE_NAME || 'access_token';
  const token = req.cookies?.[cookieName];

  if (!token) {
    return res.status(401).json({ message: 'unauthorized' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as { sub: string };
    req.userId = payload.sub;
    next();
  } catch (error) {
    res.status(401).json({ message: 'invalid token' });
  }
}
