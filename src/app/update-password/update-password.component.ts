import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/AuthService";

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(public serv:AuthService) { }

  ngOnInit() {
  }

  updatePassword(data){
    this.serv.update(data).subscribe(value => {
          console.log("val");
    })

  }

}
