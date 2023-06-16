import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IstoreByLocation } from 'src/app/InterfaceAPI/IstoreByLocation/istore-by-location';

@Injectable({
  providedIn: 'root'
})
export class ServiceResturantByLocationService {

  constructor(private http :HttpClient) { }

  getStoresByLocationCairo():Observable<IstoreByLocation[]>{
    return this.http.get<IstoreByLocation[]>(`${environment.ApiUrl}/locations/GetAllStoresforlocationsByState?state=cairo`);

  }

  getStoresByLocationGiza():Observable<IstoreByLocation[]>{
    return this.http.get<IstoreByLocation[]>(`${environment.ApiUrl}/locations/GetAllStoresforlocationsByState?state=giza`);

  }
}
