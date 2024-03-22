import { ITask } from './ITask';

export interface ITaskImplement {
  getAllTasks(): Promise<ITask[]>;
  addTask(task: ITask): Promise<void>;
  updateTask(taskId: number): Promise<ITask | null>;
  deleteTask(id: number): Promise<ITask[]>;
}
