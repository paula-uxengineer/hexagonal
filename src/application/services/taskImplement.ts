import { ITask } from '../../domain/interfaces/taskRepo';
import { ITasks } from '../../domain/interfaces/tasklmplementRepo';
import { PersistenceData } from '../../infrastructure/services/persistence-data';

export class TaskImplement extends PersistenceData implements ITasks {
  // following SOLID principles, privatizing listTasks improves encapsulation and abstraction.
  private listTasks: ITask[];

  constructor() {
    super();
    // load tasks from file (data.json) when creating an instance of TaskImplement
    this.listTasks = this.loadTasksFromFile(
      '../../infrastructure/database/data.json'
    );
  }

  async getAllTasks(): Promise<ITask[]> {
    return this.listTasks;
  }

  async getTaskById(id: number): Promise<ITask | null> {
    return this.listTasks.find((task: ITask) => task.id === id) || null;
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
