import { Request, Response, NextFunction } from 'express';

export const cacheControlMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
};
