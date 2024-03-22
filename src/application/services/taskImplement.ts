import { ITask } from '../../domain/interfaces/ITask';
import { PersistenceData } from '../../infrastructure/services/PersistenceData';
import { ITaskImplement } from '../../domain/interfaces/ITaskImplement';

export class TaskImplement extends PersistenceData implements ITaskImplement {
  private dataJson: ITask[];

  constructor() {
    super();
    this.dataJson = this.loadTasksFromFile(
      './src/infrastructure/database/data.json'
    );
  }

  async getAllTasks(): Promise<ITask[]> {
    return this.dataJson;
  }

  async addTask(task: ITask): Promise<void> {
    const newTask: ITask = {
      id: task.id,
      description: task.description,
      completed: false
    };
    this.dataJson.push(newTask);
    this.saveTasksToFile(this.dataJson);
  }

  async updateTask(taskId: number): Promise<ITask | null> {
    const taskIndex = this.dataJson.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      const task = this.dataJson[taskIndex];
      task.completed = true;
      this.dataJson[taskIndex] = task;
      this.saveTasksToFile(this.dataJson);
      return task;
    }
    return null;
  }

  async deleteTask(id: number): Promise<ITask[]> {
    const index = this.dataJson.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.dataJson.splice(index, 1);
      this.saveTasksToFile(this.dataJson);
    }
    return this.dataJson;
  }
}
