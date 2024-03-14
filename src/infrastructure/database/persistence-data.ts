import { ITask } from '../../repositories/taskRepo';
import fs from 'fs';

export class PersistenceData {
  saveTasksToFile(tasks: ITask[]) {
    fs.writeFileSync(
      '../../infrastructure/database/data.json',
      JSON.stringify(tasks),
      'utf-8'
    ); //save in data.json

    console.log('Tasks saved in the tasks.json file.');
  }

  loadTasksFromFile(filename: string) {
    const data = fs.readFileSync(filename, 'utf-8');
    const tasks = JSON.parse(data);

    return tasks;
  }
}

const result = new PersistenceData().loadTasksFromFile('./data.json');
console.log(result);
