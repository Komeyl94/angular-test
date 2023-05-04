import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodosService } from 'src/app/todos.service';
import { Todo } from 'src/app/types/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  constructor(private todosService: TodosService) { }

  todos: Todo[] = [];
  private todoObservable: Subscription;

  ngOnInit(): void {
    this.todoObservable = this.todosService.todoObs.subscribe(todos => {
      this.todos = todos;
    })
  }

  ngOnDestroy(): void {
    this.todoObservable.unsubscribe();
  }
}
