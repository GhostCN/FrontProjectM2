import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  private jwtToken:string=null;
  public infos;
  private host:string="http://localhost:8080";
  constructor(private http:HttpClient){

  }

  login(user){
    return  this.http.post(this.host+"/login",user,{observe:'response'})
  }

  saveToken(jwt:string){
    localStorage.setItem('token',jwt);
    let jwtHelper=new JwtHelperService();
    this.infos=jwtHelper.decodeToken(jwt);


  }

  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }

  getTask()
  {
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/tasks",{headers:new HttpHeaders({'Authorization':this.jwtToken})})
  }

  isAdmin()
  {
    for(let role of this.infos.roles)
    {
      if(role.authority=="ADMIN")
      {
        return true;
      }
      return false;

    }
  }

  logout(){
    this.jwtToken=null;
    localStorage.removeItem('token');
  }

  saveTask(task){
    return  this.http.post(this.host+"/add",task,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  loadService(){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/lservice",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  loadPoste(){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/lposte",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  loadRole(){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/lrole",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  register(user){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post(this.host+"/register",user,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  update(data){
    return this.http.put(this.host+"/update",data,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

}
