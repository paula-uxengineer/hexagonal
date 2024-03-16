import { Request, Response } from 'express';
import { TaskImplement } from '../../application/services/taskImplement';

export class TaskController {
  private taskImplement: TaskImplement;

  constructor() {
    this.taskImplement = new TaskImplement();
  }

  async getAllTasks(req: Request, res: Response): Promise<void> {
    const tasks = await this.taskImplement.getAllTasks();
    res.json(tasks);
  }

  async getTaskById(req: Request, res: Response): Promise<void> {
    const taskId = parseInt(req.params.id);
    const task = await this.taskImplement.getTaskById(taskId);
    if (task) {
      res.json(task);
    } else {
      res.status(404).send('Task not found');
    }
  }

  async addTask(req: Request, res: Response): Promise<void> {
    const task = req.body;
    await this.taskImplement.addTask(task);
    res.sendStatus(201);
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
    updatedTask.id = taskId;
    await this.taskImplement.updateTask(updatedTask);
    res.sendStatus(204);
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    const taskId = parseInt(req.params.id);
    await this.taskImplement.deleteTask(taskId);
    res.sendStatus(204);
  }
}
