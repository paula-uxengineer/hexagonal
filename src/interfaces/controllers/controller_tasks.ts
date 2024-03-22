import { Request, Response } from 'express';
import { TaskImplement } from '../../application/services/TaskImplement';
import { ITask } from '../../domain/interfaces/ITask';
export class TaskController {
  private taskImplement: TaskImplement;

  constructor() {
    this.taskImplement = new TaskImplement();
  }

  getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
      const tasks: ITask[] = await this.taskImplement.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).send('Error retrieving tasks.');
    }
  };

  addTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const taskData: ITask = req.body;
      await this.taskImplement.addTask(taskData);
      res.status(201).json(this.taskImplement.getAllTasks());
    } catch (error) {
      res.status(500).send('Error adding task.');
    }
  };

  updateTask = async (req: Request, res: Response): Promise<void> => {
    const taskId = parseInt(req.params.id);

    try {
      const updatedTask = await this.taskImplement.updateTask(taskId);
      if (updatedTask) {
        res.status(200).json({
          status: 'success',
          message: 'Task updated successfully',
          updatedTask: updatedTask,
          tasks: await this.taskImplement.getAllTasks()
        });
      } else {
        res.status(404).json({
          status: 'error',
          message: 'Task not found.'
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Error updating task.'
      });
    }
  };

  deleteTask = async (req: Request, res: Response): Promise<void> => {
    const taskId = parseInt(req.params.id);

    try {
      const remainingTasks = await this.taskImplement.deleteTask(taskId);

      if (remainingTasks.length === 0) {
        res.status(404).send('Task not found');
      } else {
        res.status(204).send('Task deleted');
      }
    } catch (error) {
      res.status(500).send('Error deleting task.');
    }
  };
}
