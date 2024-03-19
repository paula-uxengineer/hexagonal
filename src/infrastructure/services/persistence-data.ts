import { IJson } from '../../domain/interfaces/taskRepo';
import { IData } from '../../application/dtos/dataRepo';
import fs from 'fs';

export class PersistenceData implements IData {
  saveTasksToFile(dataObject: IJson) {
    fs.writeFile(
      './src/infrastructure/database/data.json',
      JSON.stringify(dataObject),
      'utf-8',
      (error) => {
        if (error) console.error('Error saving tasks:', error);
      }
    );
  }

  loadTasksFromFile(route: string) {
    const data = fs.readFileSync(route, 'utf-8');
    const taskObject = JSON.parse(data);

    return taskObject;
  }
}
