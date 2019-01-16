import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/AuthService';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
private task:any;
  constructor(public service:AuthService) { }

  ngOnInit() {

  }
  OnRegister(dataform){
    this.service.saveTask(dataform).subscribe(data=>{
      this.task=data;
      console.log(this.task);
    },error1 => {
      console.log(error1);
    })
  }

}
