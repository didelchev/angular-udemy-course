import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTask } from './task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})


export class Task {
  @Input() task?: UserTask;
  @Output() complete = new EventEmitter<string>();


  completeTask(){
    this.complete.emit(this.task?.id)
  }
}
