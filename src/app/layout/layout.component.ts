import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/AuthService";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public router:Router) { }
  mode:number
  ngOnInit() {
 // this.mode=  this.aut.isAdmin()
  }

  onListPat(){
    this.router.navigate(['listPat'])
  }

  onListConsultation(){
    this.router.navigate(['listCons'])
  }
  onNewConsultation(){
    this.router.navigate(['addCons'])
  }
  onNewUser(){
    this.router.navigate(['register'])
  }

  onUpdateMp(){
    this.router.navigate(['update'])
  }

  onNewPat(){
    this.router.navigate(['addPat'])
  }
  welcome(){
    this.router.navigate(['home'])
  }





}
