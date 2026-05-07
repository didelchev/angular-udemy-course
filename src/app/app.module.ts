import { NgModule } from "@angular/core";
import { App } from "./app";
import { BrowserModule } from "@angular/platform-browser";
import { Header } from "./header/header";
import { UserComponent } from "./user/user";
import { Task } from "./tasks/task/task";
import { Tasks } from "./tasks/tasks";
import { Card } from "./shared/card/card";
import { NewTask } from "./tasks/new-task/new-task";
import { FormsModule } from "@angular/forms";

 @NgModule({
    declarations: [App, Header, UserComponent, Card, Tasks, Task, NewTask],
    bootstrap: [App],
    imports: [BrowserModule, FormsModule ]

 })


 export class AppModule {}