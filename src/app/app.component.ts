import { Component } from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from '../services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private service:AuthService,private router:Router){}

  onLogout(){
    this.router.navigateByUrl("/login");
    this.service.logout();
  }
}
