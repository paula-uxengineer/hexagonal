import { PersistenceData } from '../../infrastructure/database/persistence-data';
import { ITask } from '../../repositories/taskRepo';
import { ITasks } from '../../repositories/tasksRepo';

export class AllTasks extends PersistenceData implements ITasks {
  private listTasks: ITask[];

  constructor() {
    super();
    this.listTasks = this.loadTasksFromFile(
      '../../infrastructure/database/data.json'
    );
  }

  async getAllTasks(): Promise<ITask[]> {
    return this.listTasks;
  }

  async getTaskById(id: number): Promise<ITask | null> {
    return this.listTasks.find((task) => task.id === id) || null;
  }

  async addTask(task: ITask): Promise<void> {
    this.listTasks.push(task);
  }

  async updateTask(task: ITask): Promise<void> {
    const index = this.listTasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.listTasks[index] = task;
    }
  }

  async deleteTask(id: number): Promise<void> {
    this.listTasks = this.listTasks.filter((task) => task.id !== id);
  }
}
