// import { TaskImplement } from '../../application/services/TaskImplement';

// describe('TaskImplement', () => {
//   let taskImplement: TaskImplement;

//   beforeEach(() => {
//     taskImplement = new TaskImplement();
//   });

//   describe('addTask', () => {
//     it('should add a new task', async () => {
//       const newTask = {
//         id: 16,
//         description: 'New task',
//         completed: false
//       };

//       await taskImplement.addTask(newTask);

//       const tasks = await taskImplement.getAllTasks();
//       const addedTask = tasks.find((task) => task.id === 16);

//       expect(addedTask).toEqual(newTask);
//     });
//   });

//   describe('updateTask', () => {
//     it('should update the status of a task', async () => {
//       const taskId = 1;

//       await taskImplement.updateTask(taskId);

//       const tasks = await taskImplement.getAllTasks();
//       const updatedTask = tasks.find((task) => task.id === taskId);

//       if (updatedTask) {
//         expect(updatedTask.completed).toBe(true);
//       } else {
//         fail('Task not found');
//       }
//     });

//     it('should return null if the task is not found', async () => {
//       const taskId = 100;

//       const updatedTask = await taskImplement.updateTask(taskId);

//       expect(updatedTask).toBeNull();
//     });
//   });

//   describe('deleteTask', () => {
//     it('should delete a task', async () => {
//       const taskId = 1;

//       await taskImplement.deleteTask(taskId);

//       const tasks = await taskImplement.getAllTasks();
//       const deletedTask = tasks.find((task) => task.id === taskId);

//       expect(deletedTask).toBeUndefined();
//     });

//     it('should return the updated task list after deleting a task', async () => {
//       const taskId = 2;

//       const updatedTasks = await taskImplement.deleteTask(taskId);

//       const tasks = await taskImplement.getAllTasks();
//       expect(updatedTasks).toEqual(tasks);
//     });

//     it('should return the task list unchanged if the task is not found', async () => {
//       const taskId = 100;

//       const updatedTasks = await taskImplement.deleteTask(taskId);

//       const tasks = await taskImplement.getAllTasks();
//       expect(updatedTasks).toEqual(tasks);
//     });
//   });
// });
