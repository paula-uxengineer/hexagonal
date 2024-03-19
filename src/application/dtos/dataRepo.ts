import { IJson } from '../../domain/interfaces/taskRepo';

export interface IData {
  saveTasksToFile(dataObject: IJson): void;
  loadTasksFromFile(filename: string): void;
}
