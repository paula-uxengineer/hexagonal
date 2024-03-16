import { ITask } from './taskRepo';

export interface ITasks {
  getAllTasks(): Promise<ITask[]>;
  getTaskById(id: number): Promise<ITask | null>;
  addTask(task: ITask): Promise<void>;
  updateTask(task: ITask): Promise<void>;
  deleteTask(id: number): Promise<void>;
}
