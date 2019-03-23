import { Component, OnInit } from '@angular/core';
import {DocMedicService} from "../../services/DocMedicService";

@Component({
  selector: 'app-nouv-patient',
  templateUrl: './nouv-patient.component.html',
  styleUrls: ['./nouv-patient.component.css']
})
export class NouvPatientComponent implements OnInit {
  mode:number;
  public pat:any
  constructor(public docServ:DocMedicService) { }

  onSave(dataForm){
    this.docServ.addPatient(dataForm).subscribe(data=>{
      console.log('dataForm',data);
      this.pat=data;
      if(this.pat!=null){
      this.mode=0
      }
      else this.mode=1
    })
  }

  ngOnInit() {
  }

  Update(data){
    console.log("update"+data)
  }

}
