import { ITask } from '../../domain/interfaces/taskRepo';
import { IData } from '../../application/dtos/dataRepo';
import fs from 'fs';

export class PersistenceData implements IData {
  saveTasksToFile(tasks: ITask[]) {
    fs.writeFile(
      '/src/infrastructure/database/data.json',
      JSON.stringify(tasks),
      'utf-8',
      (error) => {
        if (error) {
          console.error('Error saving tasks:', error);
        } else {
          console.log('Tasks saved.');
        }
      }
    );
  }

  loadTasksFromFile(route: string) {
    const data = fs.readFileSync(route, 'utf-8');
    const tasks = JSON.parse(data);

    return tasks;
  }
}
