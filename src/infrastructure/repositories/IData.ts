import { TaskDTO } from '../../application/dtos/TaskDTO';

export interface IData {
  saveTasksToFile(dataObject: TaskDTO): void;
  loadTasksFromFile(filename: string): TaskDTO;
}
