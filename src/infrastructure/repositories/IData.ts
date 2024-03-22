import { IJson } from '../../application/dtos/IJson';

export interface IData {
  saveTasksToFile(dataObject: IJson): void;
  loadTasksFromFile(filename: string): void;
}
