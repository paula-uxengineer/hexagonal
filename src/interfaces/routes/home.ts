// routes/taskRoutes.ts
import express from 'express';
import { TaskController } from '../controllers/task-controller';

const router = express.Router();
const taskController = new TaskController();

router.get('/tasks', taskController.getAllTasks.bind(taskController));
router.get('/tasks/:id', taskController.getTaskById.bind(taskController));
router.post('/tasks', taskController.addTask.bind(taskController));
router.put('/tasks/:id', taskController.updateTask.bind(taskController));
router.delete('/tasks/:id', taskController.deleteTask.bind(taskController));

export default router;
