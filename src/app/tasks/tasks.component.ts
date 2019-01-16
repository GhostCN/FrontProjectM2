import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/AuthService';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  constructor(public service:AuthService,private router:Router) { }

  ngOnInit() {
    this.service.getTask().subscribe(data=>{
      this.tasks=data;

    },error1 => {
      this.service.logout();
      this.router.navigateByUrl("/login");
    })
  }

  newTask()
  {
    this.router.navigateByUrl("/addTask");
  }

}
