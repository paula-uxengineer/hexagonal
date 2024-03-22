import { ITask } from '../../domain/interfaces/ITask';

export interface IData {
  saveTasksToFile(dataObject: ITask[]): void;
  loadTasksFromFile(filename: string): void;
}
