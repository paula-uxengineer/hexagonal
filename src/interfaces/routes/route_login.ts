import express from 'express';
import { LoginController } from '../controllers/controller_login';
// import { authMiddleware } from '../middlewares/middleware_auth';

const loginRouter = express.Router();
const loginController = new LoginController();

loginRouter.post('/', loginController.login);

export default loginRouter;
