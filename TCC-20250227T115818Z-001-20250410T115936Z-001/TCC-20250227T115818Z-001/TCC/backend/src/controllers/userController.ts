import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
  // placeholder - connect to DB later
  res.json([{ id: 1, name: 'Aluno Exemplo', email: 'aluno@example.com' }]);
};
