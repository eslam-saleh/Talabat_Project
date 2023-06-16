import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ImenuCategotry } from 'src/app/InterfaceAPI/ImenuCategotry/imenu-categotry';
import { ImenuItemCategory } from 'src/app/InterfaceAPI/ImenuItemCategory/imenu-item-category';

@Injectable({
  providedIn: 'root'
})
export class ServiceMenuItemCategoryService {

  constructor(private http:HttpClient) { }
  getAllMenuItemCategory(){
    return ['pitza','chicken','meat'];
  }
  
  getMenuItemCategory(id):Observable<ImenuItemCategory[]>{
    return this.http.get<ImenuItemCategory[]>(`${environment.ApiUrl}/api/MenuItemCatogeries/${id}`);
  }
}
