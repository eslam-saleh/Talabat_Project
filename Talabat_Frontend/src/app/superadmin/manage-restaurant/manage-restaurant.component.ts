import { ServiceStoreService } from 'src/app/ServicesAPI/serviceStore/service-store.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/ServicesAPI/UserServices/user.service';

@Component({
  selector: 'app-manage-restaurant',
  templateUrl: './manage-restaurant.component.html',
  styleUrls: ['./manage-restaurant.component.css']
})
export class ManageRestaurantComponent implements OnInit {
  stores$;
  constructor(private storeServices:ServiceStoreService
    ) { 
    this.stores$=this.storeServices.getStore();
  }

  ngOnInit(): void {
  
  }
}
