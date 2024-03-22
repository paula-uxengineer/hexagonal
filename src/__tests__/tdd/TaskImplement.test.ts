import { TaskImplement } from '../../application/services/TaskImplement';

// Mock de PersistenceData
jest.mock('../../infrastructure/services/PersistenceData', () => ({
  PersistenceData: jest.fn().mockImplementation(() => ({
    loadTasksFromFile: jest.fn(() => ({
      tasks: []
    })),
    saveTasksToFile: jest.fn()
  }))
}));

describe('TaskImplement', () => {
  let taskImplement: TaskImplement;

  beforeEach(() => {
    taskImplement = new TaskImplement();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize dataJson with empty tasks array', () => {
    expect(taskImplement['dataJson'].tasks).toEqual([]);
  });

  describe('getAllTasks', () => {
    it('should return all tasks', async () => {
      const tasks = await taskImplement.getAllTasks();
      expect(tasks).toEqual([]);
    });
  });

  describe('addTask', () => {
    it('should add a new task', async () => {
      const newTask = {
        id: 1,
        description: 'Test task',
        completed: false
      };
      await taskImplement.addTask(newTask);
      expect(taskImplement['dataJson'].tasks).toHaveLength(1);
      expect(taskImplement['dataJson'].tasks[0]).toEqual(newTask);
    });
  });

  describe('updateTask', () => {
    it('should update an existing task', async () => {
      const taskId = 1;
      taskImplement['dataJson'].tasks = [{ id: taskId, description: 'Task', completed: false }];
      const updatedTask = await taskImplement.updateTask(taskId);
      expect(updatedTask).not.toBeNull();
      expect(updatedTask!.completed).toBe(true);
    });

    it('should return null if task not found', async () => {
      const updatedTask = await taskImplement.updateTask(999);
      expect(updatedTask).toBeNull();
    });
  });

  describe('deleteTask', () => {
    it('should delete an existing task', async () => {
      const taskId = 1;
      taskImplement['dataJson'].tasks = [{ id: taskId, description: 'Task', completed: false }];
      await taskImplement.deleteTask(taskId);
      expect(taskImplement['dataJson'].tasks).toHaveLength(0);
    });

    it('should do nothing if task not found', async () => {
      const taskId = 999;
      taskImplement['dataJson'].tasks = [{ id: 1, description: 'Task', completed: false }];
      await taskImplement.deleteTask(taskId);
      expect(taskImplement['dataJson'].tasks).toHaveLength(1);
    });
  });
});
