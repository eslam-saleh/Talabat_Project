import {
  environment
} from './../../../environments/environment.prod';
import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  IMenuItem
} from 'src/app/InterfaceAPI/ImenuItem/i-menu-item';

@Injectable({
  providedIn: 'root'
})
export class SeviceMenuItemService {
  menuItem: IMenuItem[];
  constructor(private http: HttpClient) {}
  grtAllMenuItem() {
    let product: IMenuItem[] = [{
      id: 1,
      name : "yyy",
      price:10,
      img:"www",
      describtion:"uuuuuuuu",
      discount:10,
      catName:"tttt"
    }];
    return product;
  }
  getMenuItem(id: number): Observable < IMenuItem[] > {
    return this.http.get < IMenuItem[] > (`${environment.ApiUrl}/api/menuItem/${id}`);
  }
  create(menuItem){
    return this.http.post(`${environment.ApiUrl}/api/menuItem`,menuItem)
  }
  update(id,menuItem){
    return this.http.put(`${environment.ApiUrl}/api/menuItem/${id}`,menuItem)

  }
  delete(id){
    return this.http.delete(`${environment.ApiUrl}/api/menuItem/${id}`)

  }
}
