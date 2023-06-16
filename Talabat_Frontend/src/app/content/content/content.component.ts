import { Router } from '@angular/router';
import { StoreLocationService } from './../../ServicesAPI/locationservice/store-location.service';
import { Component, OnInit } from '@angular/core';
import { IstoreByLocation } from 'src/app/InterfaceAPI/IstoreByLocation/istore-by-location';
// import { NgxSpinnerService } from "ngx-spinner";
import { ServiceResturantByLocationService } from 'src/app/ServicesAPI/serviceResturantByLocation/service-resturant-by-location.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 
  Locations:string[];
  deliveryImage:string;
  toAlResturnat:string;
  toBecomePartner:string;
  states$;
  areas$;
  canSelectArea=false;
  state='';
  area=''
  constructor(private storeLocSer:StoreLocationService,
    private router:Router) {
    this.deliveryImage="assets/delivery/deliverImage.jpg";
    this.toAlResturnat="assets/Home/toAllResturants.JPG";
    this.toBecomePartner="assets/Home/toBecomePartner.JPG";
    this.states$=this.storeLocSer.getAllState();
    
   }

  ngOnInit(): void {
 
  }
  onChangeState(val){
    this.canSelectArea=true;
    this.state=val;
    this.areas$=this.storeLocSer.getAllArea(val);
    console.log(val)
  }
  onChangeArea(val){
    this.area=val;
  }
  onClick(){
    this.router.navigate(['/AllResturants'],
    {queryParams:{state:this.state
    ,area:this.area}});
  }


}
