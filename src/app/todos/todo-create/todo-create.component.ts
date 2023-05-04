import { Component } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent {
  constructor(private todosService: TodosService) { }

  addNewTodo(name: string) {
    this.todosService.addNewTodo(name)
  }
}
