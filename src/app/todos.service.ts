import { Injectable } from '@angular/core';
import { Todo } from './types/todos';
import { BehaviorSubject, Observable } from 'rxjs';

const todos: Todo[] = [
  { name: "Go shopping for pets", isDone: false },
  { name: "Water the flowers", isDone: false },
  { name: "Change car engine oil and service", isDone: false }
]; 1

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoObs = new BehaviorSubject<Todo[]>(todos);

  constructor() { }

  public addNewTodo(title: string) {
    const newTodo: Todo = { name: title, isDone: false };
    this.todoObs.next(this.todoObs.getValue().concat([newTodo]));
  }

  public toggleTodoAsDone(index: number) {
    this.todoObs.next(
      this.todoObs.value.map((todoItem, todoIndex) => todoIndex === index ? { ...todoItem, isDone: !todoItem.isDone } : todoItem)
    )
  }
}
