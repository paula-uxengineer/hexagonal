import { Request, Response } from 'express';

export class LoginController {
  login = (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
      res
        .status(200)
        .json({ message: 'Login successful', token: 'your-access-token' });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  };
}
