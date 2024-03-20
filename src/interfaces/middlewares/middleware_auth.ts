import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    //basic auth requires to start with the string 'Basic '
    res.status(401).send('Unauthorized');
  } else {
    //WORK ON THE LOGIC FOR PASSWORD AND USERNAME
    next();
  }
};
