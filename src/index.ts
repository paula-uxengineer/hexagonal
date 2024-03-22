import express from 'express';
import taskRouter from './interfaces/routes/route_tasks';
import loginRouter from './interfaces/routes/route_login';
import { cacheControlMiddleware } from './interfaces/middlewares/middleware_cache-control';
import { corsMiddleware } from './interfaces/middlewares/middleware_cors';
import { authMiddleware } from './interfaces/middlewares/middleware_auth';

const app = express();
const port = 3000;

//router for routes
app.use('/home', taskRouter);
app.use('/home/login', loginRouter);

//middlewares
app.use(express.json());
app.use(cacheControlMiddleware);
app.use(corsMiddleware);
app.use(authMiddleware);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
