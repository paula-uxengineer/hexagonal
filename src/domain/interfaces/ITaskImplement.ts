import { ITask } from './ITask';

export interface ITaskImplement {
  getAllTasks(): Promise<ITask[]>;
  getTaskById(id: number): Promise<ITask | null>;
  addTask(task: ITask): Promise<void>;
  updateTask(task: ITask): Promise<void>;
  deleteTask(id: number): Promise<ITask[]>;
}
