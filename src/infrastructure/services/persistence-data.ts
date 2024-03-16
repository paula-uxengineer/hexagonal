import { ITask } from '../../domain/interfaces/taskRepo';
import { IData } from '../../application/dtos/dataRepo';
import fs from 'fs';

export class PersistenceData implements IData {
  async saveTasksToFile(tasks: ITask[]) {
    try {
      await fs.promises.writeFile(
        '../../database/data.json',
        JSON.stringify(tasks),
        'utf-8'
      );

      console.log('Tasks saved.');
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  }

  loadTasksFromFile(filename: string) {
    const data = fs.readFileSync(filename, 'utf-8');
    const tasks = JSON.parse(data);

    return tasks;
  }
}
