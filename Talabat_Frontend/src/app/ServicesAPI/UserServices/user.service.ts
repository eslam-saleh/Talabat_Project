import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/Rx';
import { map } from "rxjs/operators"; 
// import 'rxjs/add/operator/map';
import { Iauthtoken } from 'src/app/InterfaceAPI/iauthtoken';
import { Iuser } from 'src/app/InterfaceAPI/iuser';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  register(user){
    //let body=JSON.parse(user);
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
    return this.http.post(environment.ApiUrl+'/api/Account/Register',user);
  }
  logIn(user){
    let body="grant_type=password&username="+user.email+"&password="+user.password;
    
    console.log(body);
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
    return this.http.post(environment.ApiUrl+'/token',body,httpOptions)
    .pipe(map((res:any)=>{
      let result:Iauthtoken=JSON.parse(JSON.stringify(res));
      if(result&&result.access_token){
        result.expires_in=this.setExpireDate(result.expires_in)
        localStorage.setItem('user',JSON.stringify(result))
        return true;
      }else
        return false;
      }
    )
    )
  }
  logOut(){
    localStorage.removeItem('user');
  }
  isLoggedIn(){
    let userToken:Iauthtoken=JSON.parse(localStorage.getItem('user'));
    if(userToken&&this.isNotExpire(userToken.expires_in))
      return true;
    else 
      return false;
  }
  isNotExpire(date:number){
    
    if(new Date().getSeconds()>date)
      return false;
    return true;
  }
  setExpireDate(date){
    let dateInSeconds:number=parseInt(date);
    return new Date().getSeconds()+dateInSeconds;
  }
  isAdmin(){
    let userToken=JSON.parse(localStorage.getItem('user'));
    console.log(userToken);
    if(!userToken)return false;
    return JSON.parse(userToken.roles).some(item=>{
      return item==='admin'
    });
  }
  getUserName(){
    let userToken=JSON.parse(localStorage.getItem('user'));
    return userToken?userToken.userName:' ';

  }
  getUserById(id):Observable<any>{
    //debugger
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })};
    return this.http.get(environment.ApiUrl+'/api/Users/'+id);
  }
  getAllUsers(){
    return this.http.get(environment.ApiUrl+'/api/Users');
  }
  delete(id){
    return this.http.delete(environment.ApiUrl+'/api/Users/'+id);
  }
}
