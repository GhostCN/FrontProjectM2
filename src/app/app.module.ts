import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../services/AuthService';
import { LayoutComponent } from './layout/layout.component';
import { Page1Component } from './page1/page1.component';
import { MpComponent } from './mp/mp.component';
import { NouvConsultationComponent } from './nouv-consultation/nouv-consultation.component';
import { NouvPatientComponent } from './nouv-patient/nouv-patient.component';
import {DocMedicService} from "../services/DocMedicService";
import { ListPatientComponent } from './list-patient/list-patient.component';
import { ListConsultationComponent } from './list-consultation/list-consultation.component';
import {DataTablesModule} from "angular-datatables";
import { UpdateConsComponent } from './update-cons/update-cons.component';
import {NgSelectModule} from "@ng-select/ng-select";
import { PrintComponent } from './print/print.component';
import { HomeComponent } from './home/home.component';




const appRoutes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"addTask",component:NewTaskComponent},
 /* {path:"home",component:LayoutComponent},*/
  {path:"",redirectTo:"login",pathMatch:"full"},
 /* { path: "**", component: Page1Component },*/
  {path:"",
    component:LayoutComponent,
    children:[
      {path:"register",component:RegisterComponent},
    /*  {path:"home",component:LayoutComponent},*/
      {path:"home",component:HomeComponent},
      {path:"update",component:MpComponent},
      {path:"addCons",component:NouvConsultationComponent},
      {path:"addPat",component:NouvPatientComponent},
      {path:"listPat",component:ListPatientComponent},
      {path:"listCons",component:ListConsultationComponent},
      {path:"print/:id",component:PrintComponent},
      {path:"editCons/:id",component:UpdateConsComponent},

    ]

  },

  ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TasksComponent,
    NewTaskComponent,
    MpComponent,
    LayoutComponent,
    Page1Component,
    MpComponent,
    NouvConsultationComponent,
    NouvPatientComponent,
    ListPatientComponent,
    ListConsultationComponent,
    UpdateConsComponent,
    PrintComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule,NgSelectModule,DataTablesModule,ReactiveFormsModule,

  ],
  providers: [AuthService,DocMedicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
