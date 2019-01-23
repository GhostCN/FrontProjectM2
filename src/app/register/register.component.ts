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
    mode:number
  constructor(public serv:AuthService) {

  }

  ngOnInit() {
    /**
     * Load poste
     */
    this.serv.loadPoste().subscribe(data=>{
      this.postes=data
      console.log("data",this.postes)
    },error1 => {
      console.log(error1)
    })

    /**
     * Load service
     */
    this.serv.loadService().subscribe(data=>{
      this.services=data
      console.log("data",this.services)
    },error1 => {
      console.log(error1)
    })
    /**
     * Load role
     */
    this.serv.loadRole().subscribe(data=>{
      this.roles=data
      console.log("data",this.roles)
    },error1 => {
      console.log(error1)
    })
  }

  onRegister(formdata){
      console.log("form data",formdata)
    this.serv.register(formdata).subscribe(data=>{this.mode=0},error1 =>{this.mode=1} )

  }

}
