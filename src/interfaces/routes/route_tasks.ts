import express from 'express';
import { cacheControlMiddleware } from '../middlewares/middleware_cache-control';
import { corsMiddleware } from '../middlewares/middleware_cors';
import { TaskController } from '../controllers/controller_tasks';

const taskRouter = express.Router();

const taskController = new TaskController();

//tasks CRUD have the middlewares of cors and cache-control
taskRouter.get(
  '/tasks',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.getAllTasks
);

taskRouter.post(
  '/tasks',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.addTask
); //no caching when add a tasks

taskRouter.put(
  '/tasks/:id',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.updateTask
);
taskRouter.delete(
  '/tasks/:id',
  corsMiddleware,
  cacheControlMiddleware,
  taskController.deleteTask
); // when delete a task from database requires authorization

export default taskRouter;
