import express from 'express';
import cors from 'cors';
import { Request, Response, NextFunction } from 'express';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000.com',
  optionsSuccessStatus: 200 // actual browsers use this status, old browsers and smartTV use 204
};

app.get(
  '/tasks',
  cors(corsOptions),
  (req: Request, res: Response, next: NextFunction) => {
    res.send({ message: 'Cors-enabled for localhost:3000' });
    next();
  }
);

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  next();
};
