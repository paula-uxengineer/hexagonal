export interface ITask {
  id: number;
  description: string;
  completed: boolean;
}

export interface IJson {
  tasks: ITask[];
  index: number;
}
