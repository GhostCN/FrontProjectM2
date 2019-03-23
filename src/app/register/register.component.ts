import { Component, OnInit } from '@angular/core';
import {Poste} from '../models/Poste';
import {Role} from '../models/Role';
import {Service} from '../models/service';
import {AuthService} from '../../services/AuthService';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/internal/Observable";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  p:Poste; r:Role ; s:Service;
  postes:any;
  services:any;
  submitted: boolean = false;
  roles:any;
    mode:number
  loginForm: FormGroup;
  constructor(public serv:AuthService,public formBuilder: FormBuilder) {

  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      matricule: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      poste: ['', Validators.required],
      date: ['', Validators.required],
      service: ['', Validators.required],
      role: ['', Validators.required],
    });


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
    },error1  => {
      console.log("Erreur",error1)
    })
  }


  onRegister(){
console.log("formdata",this.loginForm)
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.serv.register(this.loginForm.value).subscribe(data=>{this.mode=0},
        err =>{
      this.mode=1
      console.log("erreur",err
      )

    } )

  }

}
