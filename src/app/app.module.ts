import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'tasks', component: TasksComponent},
      {path: 'create', component: CreateTaskComponent},
      {path: 'update/:id', component: UpdateTaskComponent},
      {path: '**', redirectTo: 'tasks'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
