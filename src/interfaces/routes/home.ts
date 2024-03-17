import express from 'express';
import { TaskController } from '../controllers/task-controller';

const router = express.Router();
const taskController = new TaskController();

router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/tasks', taskController.addTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;
