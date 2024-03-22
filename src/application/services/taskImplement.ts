import { ITask } from '../../domain/interfaces/ITask';
import { TaskDTO } from '../../application/dtos/TaskDTO';
import { PersistenceData } from '../../infrastructure/services/PersistenceData';
import { ITaskImplement } from '../../domain/interfaces/ITaskImplement';

export class TaskImplement extends PersistenceData implements ITaskImplement {
  private dataJson: TaskDTO;

  constructor() {
    super();
    this.dataJson = this.loadTasksFromFile(
      './src/infrastructure/database/data.json'
    );
  }

  async getAllTasks(): Promise<ITask[]> {
    // console.log(this.dataJson);
    return this.dataJson.tasks;
  }

  async addTask(task: ITask): Promise<TaskDTO> {
    const newTask: ITask = {
      id: task.id,
      description: task.description,
      completed: false
    };

    this.dataJson.tasks.push(newTask);
    this.saveTasksToFile(this.dataJson);
    return this.dataJson;
  }

  async updateTask(taskId: number): Promise<ITask | null> {
    const taskIndex = this.dataJson.tasks.findIndex(
      (task) => task.id === taskId
    );
    if (taskIndex !== -1) {
      const task = this.dataJson.tasks[taskIndex];
      task.completed = true;
      this.dataJson.tasks[taskIndex] = task;
      this.saveTasksToFile(this.dataJson);
      return task;
    }
    return null;
  }

  async deleteTask(id: number): Promise<ITask> {
    const index = this.dataJson.tasks.findIndex((task) => task.id === id);
    const dataDeleted = this.dataJson.tasks[index];
    if (index !== -1) {
      this.dataJson.tasks.splice(index, 1);
      this.saveTasksToFile(this.dataJson);
    }
    return dataDeleted;
  }
}
