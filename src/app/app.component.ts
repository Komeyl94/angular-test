import { Component } from '@angular/core';
import { Todo } from './types/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];

  addTodo(name: string) {
    const newTodo: Todo = { name, isDone: false };
    this.todos.push(newTodo);
  }
}
