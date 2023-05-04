import { Component, Input } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  constructor(private todosService: TodosService) { }

  @Input() name: string;
  @Input() index: number;
  @Input() isDone: boolean;

  onTodoDone() {
    this.todosService.toggleTodoAsDone(this.index);
    console.log(this.isDone);
  }
}
