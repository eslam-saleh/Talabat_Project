import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestaurantCatogeryService {

  constructor(private http:HttpClient) { }
  getAllResCatogeries(){
    return this.http.get(`${environment.ApiUrl}/api/RestaurantsCatogery`)
  }
}
