import { ITask } from '../../domain/interfaces/ITask';

export interface IJson {
  tasks: ITask[];
  index: number;
}
