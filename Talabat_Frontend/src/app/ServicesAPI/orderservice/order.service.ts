import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getAllOrderes(){
    return this.http.get(`${environment.ApiUrl}/api/Orders`)
  }
  getOrderById(id){
    return this.http.get(`${environment.ApiUrl}/api/Orders/${id}`)

  }
  create(order){
    const httpOptions ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*',
        'Authorization': 'bearer '+JSON.parse(localStorage.getItem('user')).access_token
      })};
    return this.http.post<any>(`${environment.ApiUrl}/api/Orders`,order,httpOptions);
  }
  update(id,order){
    return this.http.put(`${environment.ApiUrl}/api/Orders/${id}`,order);
  }
  delete(id){
    return this.http.delete(`${environment.ApiUrl}/api/Orders/${id}`);

  }
}
