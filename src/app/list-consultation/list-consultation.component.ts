import { Component, OnInit } from '@angular/core';
import {DocMedicService} from "../../services/DocMedicService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-consultation',
  templateUrl: './list-consultation.component.html',
  styleUrls: ['./list-consultation.component.css']
})
export class ListConsultationComponent implements OnInit {
consultation:any;

  constructor(public doc:DocMedicService,public router:Router) { }
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.doc.listConsultation().subscribe(data => {
      this.consultation = data
      console.log(this.consultation)
    })
  }

  onEdit(id){
    this.router.navigate(['editCons',id])
  }
  onPrint(id){
    this.router.navigate(['print',id])
  }


}
