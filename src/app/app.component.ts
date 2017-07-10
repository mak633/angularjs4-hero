import { Component } from '@angular/core';
const todos = [
  {
    title: "task 1",
    completed: true
  },
  {
    title: "task 2",
    completed: false
  },
  {
    title: "task 3",
    completed: false
  }
]
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  title = 'Hero';
  todos = todos;

  toggle(todo:any){
    todo.completed = !todo.completed;
  }
  delete(todo:any){
    let index = todos.indexOf(todo);
    if(index > -1){
      todos.splice(index,1);
    }
  }
}
