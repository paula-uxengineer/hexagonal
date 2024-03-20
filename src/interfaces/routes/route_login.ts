import express from 'express';
import { Request, Response } from 'express';
import { authMiddleware } from '../middlewares/middleware_auth';

const app = express();

app.use(authMiddleware);

app.get('/login', authMiddleware, (req: Request, res: Response) => {
  res.status(200).send('authoritzed for login');
});
