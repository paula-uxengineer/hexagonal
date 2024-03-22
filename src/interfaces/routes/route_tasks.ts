import express from 'express';
import { cacheControlMiddleware } from '../middlewares/middleware_cache-control';
import { corsMiddleware } from '../middlewares/middleware_cors';
import { TaskController } from '../controllers/controller_tasks';

// const app = express();
const router = express.Router();

const taskController = new TaskController();

//declaration of middlewares
// app.use(express.json());
// app.use(cacheControlMiddleware);
// app.use(corsMiddleware);

//routes and aplication of middlewares
router.get(
  '/tasks',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.getAllTasks
);

router.post(
  '/tasks',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.addTask
); //no caching when add a tasks

router.put(
  '/tasks/:id',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.updateTask
);
router.delete(
  '/tasks/:id',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.deleteTask
); // when delete a task from database requires authorization

export default router;
