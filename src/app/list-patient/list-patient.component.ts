import { Component, OnInit } from '@angular/core';
import {DocMedicService} from "../../services/DocMedicService";

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
patients:any;
  constructor(public doc:DocMedicService) { }

  ngOnInit() {
    this.doc.listPatient().subscribe(data=>{
      this.patients=data;
      console.log('list patient',this.patients)
    });
  }

}
