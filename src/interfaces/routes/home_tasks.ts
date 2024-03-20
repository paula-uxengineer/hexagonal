import express from 'express';
import { loggingMiddleware, cacheControlMiddleware, corsMiddleware, authMiddleware } from '../middlewares'
import { TaskController } from '../controllers/task-controller';


const app = express();
const router = express.Router();
const taskController = new TaskController();

app.use(express.json());
app.use(loggingMiddleware);
app.use(cacheControlMiddleware);
app.use(corsMiddleware);

router.get('/tasks', authMiddleware, taskController.getAllTasks); //now when access to get info from database requires authorization
router.get('/tasks/:id', authMiddleware, taskController.getTaskById); //now when access to get info from database requires authorization
router.post('/tasks', taskController.addTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;
