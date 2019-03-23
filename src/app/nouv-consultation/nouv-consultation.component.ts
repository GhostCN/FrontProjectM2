import { Component, OnInit } from '@angular/core';
import {DocMedicService} from "../../services/DocMedicService";
import {AuthService} from "../../services/AuthService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-nouv-consultation',
  templateUrl: './nouv-consultation.component.html',
  styleUrls: ['./nouv-consultation.component.css']
})
export class NouvConsultationComponent implements OnInit {
patients:any; services:any;
mode:number;
ok:number;
model:any;
submitted: boolean = false;
f:FormGroup;
x:any;
  constructor(public doc:DocMedicService,public serv:AuthService,public formBuilder:FormBuilder,public router:Router) { }

  ngOnInit() {
    this.f=this.formBuilder.group({
      numerodossier:['',Validators.required],
      nom:['',Validators.required],
      datenaiss:['',Validators.required],
      tel:['',Validators.required],
      prescription:['',Validators.required],
      commentaire:['',Validators.required],
      service:['',Validators.required]
    })
    this.doc.listPatient().subscribe(data=>{
      this.patients=data;
    });
    this.serv.loadService().subscribe(data=>{
      this.services=data;
      console.log("Service",this.services)
    })
  }

  onSave(){
    console.log("data",this.f.value)


    this.submitted = true;
    if (this.f.invalid) {
      return;
    }

    this.doc.addConsultation(this.f.value).subscribe(val=> {
          this.x=val;
          this.mode=this.x
      this.ok=0
      console.log("mode",this.mode)
    })
  }

  Update(data){
    console.log("data",data)

  }
  search(num){
    console.log("Bonjour",num.value)
    this.doc.getPatient(num.value).subscribe(data=>{
      this.model=data;
      if(this.model==null){
        //this.router.navigate(["addPat"])
        this.ok=1;

      }
      else{
        this.ok=0;
      }
      console.log("model",this.model)
    },error1 => {console.log(error1)})

  }


}
