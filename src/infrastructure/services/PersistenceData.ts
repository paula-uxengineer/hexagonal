import { TaskDTO } from '../../application/dtos/TaskDTO';
import { IData } from '../repositories/IData';
import fs from 'fs';

export class PersistenceData implements IData {
  saveTasksToFile(dataObject: TaskDTO) {
    fs.writeFile(
      './src/infrastructure/database/data.json',
      JSON.stringify(dataObject),
      'utf-8',
      (error) => {
        if (error) console.error('Error saving tasks:', error);
      }
    );
  }

  loadTasksFromFile(route: string): TaskDTO {
    const data = fs.readFileSync(route, 'utf-8');
    const taskObject: TaskDTO = JSON.parse(data);

    return taskObject;
  }
}
