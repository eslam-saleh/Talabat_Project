import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StoreLocationService {

  constructor(private http:HttpClient) { }
  getAllLoc(){
    return this.http.get<any[]>(`${environment.ApiUrl}/api/RestaurantLocation`);
  }
  getAllState(){
    return this.http.get(`${environment.ApiUrl}/api/RestaurantLocation/state`);
  }
  getAllArea(state){
    return this.http.get(`${environment.ApiUrl}/api/RestaurantLocation/area/${state}`);
  }
}
