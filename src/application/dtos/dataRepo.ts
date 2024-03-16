import { ITask } from '../../domain/interfaces/taskRepo';

export interface IData {
  saveTasksToFile(tasks: ITask[]): void;
  loadTasksFromFile(filename: string): void;
}
