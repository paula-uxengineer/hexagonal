import express from 'express';
import {
  cacheControlMiddleware,
  corsMiddleware,
  authMiddleware
} from '../middlewares';
import { TaskController } from '../controllers/controller_tasks';

const app = express();
const router = express.Router();

const taskController = new TaskController();

//declaration of middlewares
app.use(cacheControlMiddleware);
app.use(corsMiddleware);
app.use(authMiddleware);

//routes and aplication of middlewares
router.get(
  '/tasks',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.getAllTasks
);
router.get(
  '/tasks/:id',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.getTaskById
);
router.post(
  '/tasks',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.addTask
); //no caching when add a task
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
