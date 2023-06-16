import { Component, OnInit } from '@angular/core';
import { IstoreByLocation } from 'src/app/InterfaceAPI/IstoreByLocation/istore-by-location';
import { ServiceResturantByLocationService } from 'src/app/ServicesAPI/serviceResturantByLocation/service-resturant-by-location.service';

@Component({
  selector: 'app-resturants-at-location02',
  templateUrl: './resturants-at-location02.component.html',
  styleUrls: ['./resturants-at-location02.component.css']
})
export class ResturantsAtLocation02Component implements OnInit {
  storeByLocation: IstoreByLocation[];
  constructor(private ServiceResturantByLocationService:ServiceResturantByLocationService) { }

  ngOnInit(): void {

    this.ServiceResturantByLocationService.getStoresByLocationGiza().subscribe(
      (data)=> this.storeByLocation = data,
      (error) => console.log(error)
    )

  }

}
