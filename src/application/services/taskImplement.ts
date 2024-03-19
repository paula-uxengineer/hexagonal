import { IJson, ITask } from '../../domain/interfaces/taskRepo';
import { ITasks } from '../../domain/interfaces/tasklmplementRepo';
import { PersistenceData } from '../../infrastructure/services/persistence-data';

export class TaskImplement extends PersistenceData implements ITasks {
  // following SOLID principles, privatizing listTasks improves encapsulation and abstraction.
  private dataJson: IJson;

  constructor() {
    super();
    // load tasks from file (data.json) when creating an instance of TaskImplement
    this.dataJson = this.loadTasksFromFile(
      './src/infrastructure/database/data.json'
    );
  }

  async getAllTasks(): Promise<ITask[]> {
    return this.dataJson.tasks;
  }

  async getTaskById(id: number): Promise<ITask | null> {
    return this.dataJson.tasks.find((task: ITask) => task.id === id) || null;
  }

  async addTask(task: ITask): Promise<void> {
    this.dataJson.tasks.push(task);
  }

  async updateTask(task: ITask): Promise<void> {
    const index = this.dataJson.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.dataJson.tasks[index] = task;
    }
  }

  async deleteTask(id: number): Promise<ITask[]> {
    const list = this.dataJson.tasks.filter((task) => task.id !== id);
    this.dataJson.tasks = list;
    this.saveTasksToFile(this.dataJson);
    return this.dataJson.tasks;
  }
}
