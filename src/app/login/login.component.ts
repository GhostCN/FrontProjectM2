import { Component, OnInit } from '@angular/core';

import {Route, Router} from '@angular/router';
import {AuthService} from '../../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number=0;
  constructor(private service:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onLogin(dataForm){
    this.service.login(dataForm).subscribe(resp=>{
      let jwt=resp.headers.get("authorization");
      this.service.saveToken(jwt);
     this.router.navigateByUrl("/register")
    },error =>{
      this.mode=1;
    } )
  }


  onRegister(){

  }

}
