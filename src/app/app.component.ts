import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from './todo';
import { AppService } from './app.service';
import { CheckboxChangeEvent } from 'primeng/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-primeng-todo';

  // for clearing the input field without any validation error
  @ViewChild('todoTask') todoTask: any;

  task: string = "";
  todos: Todo[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.appService.getTodoList().subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  addTodo() {
    this.appService.addTodo({ task: this.task, completed: false }).subscribe(
      response => {
        this.todoTask.reset();      // for clearing the input field
        this.getList();     // for automatically update without refresh
        console.log(response);
      }
    )
  }

  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
    this.appService.updateTodo({...todo, completed: e.checked}).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  deleteTodo(e: unknown, id: Todo['id']) {
    this.appService.deleteTodo(id).subscribe(
      response => {
        this.getList();     // refresh the list
        console.log(response);
      }
    )
  }

}
