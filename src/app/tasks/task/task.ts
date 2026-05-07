import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTask } from './task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})


export class Task {
  @Input({required: true}) task!: UserTask;

  constructor(private tasksService: TaskService){}


    onCompleteTask() {
      this.tasksService.removeTask(this.task?.id);
  }

}
