import { Request, Response } from 'express';
import { TaskImplement } from '../../application/services/TaskImplement';

export class TaskController {
  private taskImplement: TaskImplement;

  constructor() {
    this.taskImplement = new TaskImplement();
  }

  getAllTasks = async (req: Request, res: Response): Promise<void> => {
    const tasks = await this.taskImplement.getAllTasks();

    res.json(tasks);
  };

  getTaskById = async (req: Request, res: Response): Promise<void> => {
    const taskId = parseInt(req.params.id);

    console.log(taskId);
    const task = await this.taskImplement.getTaskById(taskId);
    if (task) {
      res.json(task); //responds with the database -> data.json
    } else {
      res.status(404).send('Task not found');
    }
  };

  addTask = async (req: Request, res: Response): Promise<void> => {
    const task = req.body;
    await this.taskImplement.addTask(task);
    res.status(201).send('Task added');
  };

  updateTask = async (req: Request, res: Response): Promise<void> => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
    updatedTask.id = taskId;
    await this.taskImplement.updateTask(updatedTask);
    res.status(204).send('Taks updated');
  };

  deleteTask = async (req: Request, res: Response): Promise<void> => {
    const taskId = parseInt(req.params.id);

    await this.taskImplement.deleteTask(taskId);

    if (!taskId) {
      res.status(404).send('Task not found');
    } else {
      res.status(204).send('Task deleted');
    }
  };
}
