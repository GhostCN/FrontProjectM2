import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";
import {RegisterService} from "../models/register";


@Component({
  selector: 'app-mp',
  templateUrl: './mp.component.html',
  styleUrls: ['./mp.component.css']
})
export class MpComponent implements OnInit {
  register:RegisterService=new RegisterService();
  mode:number=0;
  constructor(private service:AuthService,private router:Router) { }

  ngOnInit() {
  }

  OnUpdate(value){
    console.log(value)
    this.service.update(value).subscribe(data=>{
      console.log(data)
    },error1 => {
      console.log(error1)
    })

  }


}
