import { IJson } from '../../domain/interfaces/IJson';

export interface IData {
  saveTasksToFile(dataObject: IJson): void;
  loadTasksFromFile(filename: string): void;
}
