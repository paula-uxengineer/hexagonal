import { ITask } from '../../repositories/taskRepo';

export interface IData extends ITask {
  saveTasksToFile(tasks: ITask[]): void;
  loadTasksFromFile(filename: string): void;
}
