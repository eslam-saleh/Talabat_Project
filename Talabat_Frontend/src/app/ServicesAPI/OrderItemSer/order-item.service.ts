import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private http:HttpClient) {

   }
   getAllOrderItem(){
     return this.http.get(`${environment.ApiUrl}/api/OrderItems`);
   }
   getOrderItemById(id){
    return this.http.get(`${environment.ApiUrl}/api/OrderItems/${id}`);
   }
   create(order:any[]){
     return this.http.post(`${environment.ApiUrl}/api/OrderItems`,order);
   }
}
