import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../services/AuthService';
import {NgSelectModule} from "@ng-select/ng-select";
import { UpdatePasswordComponent } from './update-password/update-password.component';


const appRoutes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"addTask",component:NewTaskComponent},
  {path:"register",component:RegisterComponent},
  {path:"update",component:UpdatePasswordComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}
  ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TasksComponent,
    NewTaskComponent,
    UpdatePasswordComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule,NgSelectModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
