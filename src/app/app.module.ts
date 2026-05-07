import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './header/header';
import { UserComponent } from './user/user';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App, 
    Header, 
    UserComponent,
    ],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TasksModule, CommonModule],
})
export class AppModule {}
