import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { required } from '@angular/forms/signals';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})


export class UserComponent {
  @Output() select = new EventEmitter();
  @Input({required: true}) selected: boolean = false;
  @Input({required: true}) user!: User;

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }
 
  onSelectUser(){
    this.select.emit(this.user.id)
  }
 
}