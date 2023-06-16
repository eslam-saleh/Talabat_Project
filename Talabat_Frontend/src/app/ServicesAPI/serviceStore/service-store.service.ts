import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iresturant } from 'src/app/InterfaceAPI/Iresturant/iresturant';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceStoreService {

  constructor(private http:HttpClient) { };

  getStore():Observable<Iresturant[]>{
    //debugger
    return this.http.get<Iresturant[]>(`${environment.ApiUrl}/api/Restaurants`)
  }
  getStoreByUser(){
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*',
      'Authorization': 'bearer '+JSON.parse(localStorage.getItem('user')).access_token
      })};
    return this.http.get<any>(`${environment.ApiUrl}/api/RestaurantsByUser`,httpOptions)

  }
 
  getStoreById(id){
    return this.http.get<any>(`${environment.ApiUrl}/api/Restaurants/${id}`)

  }
  update(id,res){
    return this.http.put(`${environment.ApiUrl}/api/Restaurants/${id}`,res);
  }
  create(res){
    return this.http.post(`${environment.ApiUrl}/api/Restaurants`,res);
  }
  delete(id){
    return this.http.delete(`${environment.ApiUrl}/api/Restaurants/${id}`);

  }
}


