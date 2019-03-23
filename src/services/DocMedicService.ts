import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class DocMedicService
{
  private host:string="http://localhost:8080";
  private jwtToken:string=null;

  constructor(public http:HttpClient){

  }
  addPatient(data){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post(this.host+"/addPatient",data,{headers:new HttpHeaders({'Authorization':this.jwtToken})
  });

  }

  print(id){
    if(this.jwtToken==null) this.loadToken();
  return  this.http.get(this.host+"/pdfOrdonnance/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  update(id,data){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post(this.host+"/editCons/"+id,data,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


  listPatient(){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/patients",{headers:new HttpHeaders({'Authorization':this.jwtToken})
    });
  }

  getPatient(num){
    if(this.jwtToken==null) this.loadToken();
   return this.http.post(this.host+"/getPatient",num,{headers:new HttpHeaders({'Authorization':this.jwtToken})})
  }

  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }

  addConsultation(data){
    if(this.jwtToken==null) this.loadToken();
    return  this.http.post(this.host+"/addCons",data,{headers:new HttpHeaders({'Authorization':this.jwtToken})
    });
  }

  listConsultation(){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/listCons",{headers:new HttpHeaders({'Authorization':this.jwtToken})
    });
  }
  getConsultation(id){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/getCons/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})})
  }

}
