import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { DUMMY_USERS } from './users';
import { UserComponent } from "./user/user";
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [Header, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId);
    
  }

  onSelectedUser(id: string){
    this.selectedUserId = id;

  }
}
