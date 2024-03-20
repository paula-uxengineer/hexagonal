import { ITask } from '../interfaces/ITask';

export class Task implements ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;

  constructor(
    id: number,
    title: string,
    description: string,
    completed: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
  public getId(): number {
    return this.id;
  }
  public getTitle(): string {
    return this.title;
  }
  public getDescription(): string {
    return this.description;
  }
  public getCompleted(): boolean {
    return this.completed;
  }
  public setId(id: number) {
    this.id = id;
  }
  public setTitle(title: string) {
    this.title = title;
  }
  public setDescription(description: string) {
    this.description = description;
  }
  public setCompleted(completed: boolean) {
    this.completed = completed;
  }
}
