import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000.com',
  optionsSuccessStatus: 200 // actual browsers use this status, old browsers and smartTV use 204
};

app.get('/tasks', cors(corsOptions), (req: Request, res: Response, next) => {
  res.send({ message: 'Cors-enabled for localhost:3000' });
});
