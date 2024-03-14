import { Task } from '../../domain/entities/task';

describe('Tarea', () => {
  it('should create a new Tarea instance', () => {
    const tarea = new Task(
      1,
      'Comprar leche',
      'Ir al supermercado y comprar leche',
      false
    );
    expect(tarea).toBeInstanceOf(Task);
  });

  it('should have an id, a title, and a description', () => {
    const tarea = new Task(
      1,
      'Comprar leche',
      'Ir al supermercado y comprar leche',
      false
    );
    expect(tarea.id).toBe(1);
    expect(tarea.title).toBe('Comprar leche');
    expect(tarea.description).toBe('Ir al supermercado y comprar leche');
    expect(tarea.completed).toBe(false);
  });

  it('should return the correct id, title, and description', () => {
    const tarea = new Task(
      1,
      'Comprar leche',
      'Ir al supermercado y comprar leche',
      false
    );
    expect(tarea.getId()).toBe(1);
    expect(tarea.getTitle()).toBe('Comprar leche');
    expect(tarea.getDescription()).toBe('Ir al supermercado y comprar leche');
    expect(tarea.getCompleted()).toBe(false);
  });
});
