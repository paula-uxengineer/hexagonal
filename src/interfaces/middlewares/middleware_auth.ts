import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

interface User {
  username: string;
  password: string;
}

//fictional database
const users: User[] = [
  {
    username: 'admin',
    password: crypto.createHash('sha256').update('admin').digest('hex') // generates a SHA-256 hash of the username admin, representing the hashed password
  }
];

/**
 * The middleware checks the provided username and password against a stored list of users,
 * granting access if the credentials match,
 * else returns an "Unauthorized" error.
 */
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body; // gets the username and password from the request

  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const hash = crypto.createHash('sha256').update(password).digest('hex'); // hash the provided password and compare with the stored password

  if (hash === user.password) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
