import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todolist';
  todos: any = [];
  Todolist: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  addtodo(newTodoLabel, prio) {
    var newTodo = {
      task: newTodoLabel,
      priority: prio,
      status: 'Pending',
    };
    this.todos.push(newTodo);
    localStorage.setItem('arr', JSON.stringify(this.todos));
  }
  ngOnInit() {
    this.Todolist = this.fb.group({ Task: ['', Validators.required] })
    if (localStorage.getItem('arr')) {
      this.todos = JSON.parse(localStorage.getItem('arr'));
    }
  }
  selectChange1(event: any, index) {
    this.todos[index].status = event.target.value;
    localStorage.setItem('arr', JSON.stringify(this.todos));
  }
  get Task() {
    return this.Todolist.get('Task');
  }
}
