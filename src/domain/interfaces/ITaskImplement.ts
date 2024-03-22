import { TaskDTO } from '../../application/dtos/TaskDTO';
import { ITask } from './ITask';

export interface ITaskImplement {
  getAllTasks(): Promise<ITask[]>;
  addTask(task: ITask): Promise<TaskDTO>;
  updateTask(taskId: number): Promise<ITask | null>;
  deleteTask(id: number): Promise<ITask>;
}
