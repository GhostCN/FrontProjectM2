import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DocMedicService} from "../../services/DocMedicService";
import {AuthService} from "../../services/AuthService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-cons',
  templateUrl: './update-cons.component.html',
  styleUrls: ['./update-cons.component.css']
})
export class UpdateConsComponent implements OnInit {
  f:FormGroup;
  submitted: boolean = false;
  id:number;
  patientss:any=[];
  patients:any=[]
  mode:number;
  services:any=[];
  model:any;
  constructor(public doc:DocMedicService,public serv:AuthService,public formBuilder:FormBuilder,private activatedRoute:ActivatedRoute)
  {

  }

  ngOnInit() {
   /* this.serv.loadService().subscribe(data=>{
      this.services=data
      console.log("data",this.services)
    },error1 => {
      console.log(error1)
    })
*/

    this.id = this.activatedRoute.snapshot.params["id"]
    this.doc.getConsultation(this.id).subscribe(data => {
      this.model = data;
     this.services.push(this.model.service);
     this.patientss.push(this.model.patient);
     this.patients.push(this.patientss[0]);
     console.log("patient",this.patients)
      console.log("service",this.model.service)
    })

    this.f = this.formBuilder.group({
      prescription: ['', Validators.required],
      commentaire: ['', Validators.required],

    })

  }

  onUpdate(){
    console.log("data",this.f)
    this.submitted = true;
    if (this.f.invalid) {
      return;
    }
    this.doc.update(this.id,this.f.value).subscribe(val=>{
      console.log(val)
    })
  }

  search(){
    console.log("Numero dossier",this.f.controls.numerodossier)
  }

}
