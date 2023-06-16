import { ShoppingCartService } from 'src/app/ServicesAPI/shoppingcart/shopping-cart.service';
import { StoreLocationService } from './../../ServicesAPI/locationservice/store-location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Iresturant } from 'src/app/InterfaceAPI/Iresturant/iresturant';
import { ServiceStoreService } from 'src/app/ServicesAPI/serviceStore/service-store.service';

@Component({
  selector: 'app-all-resturants02',
  templateUrl: './all-resturants02.component.html',
  styleUrls: ['./all-resturants02.component.css']
})
export class AllResturants02Component implements OnInit {
  stores:Iresturant[];
  img:string;
  RestImg1:string;
  state:string;
  area:string
  constructor(private serviceStore:ServiceStoreService,
    private route:ActivatedRoute,
    private storeLocSer:StoreLocationService,
    private router:Router,
    private cartSer:ShoppingCartService) {
      this.state=this.route.snapshot.queryParamMap.get('state')
      this.area=this.route.snapshot.queryParamMap.get('area')
      console.log(this.state,this.area);

   }

  ngOnInit(): void {
      this.serviceStore.getStore()
      .subscribe(res=>{
        let rests=res
        if(!(this.state&&this.area))
        this.stores=res;
        else{
        this.storeLocSer. getAllLoc().subscribe(loc=>{
          let set=new Set(loc.filter(rl=>rl.state==this.state&& rl.area==this.area)
          .map(l=>l.id))
          this.stores=rests.filter(r=>set.has(r.id));
        })
      }
      })
 
    this.RestImg1="assets/Resturants/Rest1.jpg";
   // this.img ="https://images.unsplash.com/profile-1445832407811-c04ed64d238b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=a6d8602c855914fe13650eedd5996cb5"
  }
  onClick(id){
    if(!(this.state&&this.area))return;
    this.cartSer.countInCart().subscribe(res=>{
      if(res.length===0){
        localStorage.setItem('resId',id);
        localStorage.setItem('state',this.state);
        localStorage.setItem('area',this.area);
      }
      this.router.navigate(['/AllResturants/Rest1/Details/Menu',id]
      ,
    {queryParams:{state:this.state
    ,area:this.area}})
    })
  }

}
