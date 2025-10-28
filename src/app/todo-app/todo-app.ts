import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-app',
  imports: [FormsModule],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css'
})
export class TodoApp {
  task = "";
  tasklist: { id: number, tname: string }[] = [];

  addTask() {
    if (this.task.length > 1) {
      let id = this.tasklist.length + 1;
      this.tasklist.push({ id, tname: this.task })
      this.task = ""
      console.log(this.tasklist)
    }
  }

  deleteTask(id: number) {
    this.tasklist = this.tasklist.filter(task => task.id !== id);
    console.log("Deleted")
  }


}
