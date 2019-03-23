import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/AuthService";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {DocMedicService} from "../../services/DocMedicService";

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
id:number;
  constructor(public doc:DocMedicService,public serv:AuthService,private activatedRoute:ActivatedRoute)
  {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"]
    this.doc.print(this.id).subscribe(data=>{})

  }

}
