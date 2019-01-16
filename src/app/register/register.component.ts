import { Component, OnInit } from '@angular/core';
import {Poste} from '../models/Poste';
import {Role} from '../models/Role';
import {Service} from '../models/service';
import {AuthService} from '../../services/AuthService';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  p:Poste; r:Role ; s:Service;
  postes:any;
  services:any;
  roles:any;

  constructor(public http:AuthService) {

  }

  ngOnInit() {
    this.http.loadPoste().subscribe(data=>{
      this.postes=data
      console.log("data",this.postes)
    },error1 => {
      console.log(error1)
    })
  }

}
