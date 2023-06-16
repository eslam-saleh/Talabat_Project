import { ServiceStoreService } from './../../ServicesAPI/serviceStore/service-store.service';
import { StoreLocationService } from './../../ServicesAPI/locationservice/store-location.service';
import { OrderItemInCart } from './../../InterfaceAPI/order-item';
import { ShoppingCartService } from 'src/app/ServicesAPI/shoppingcart/shopping-cart.service';
import {
  ActivatedRoute
} from '@angular/router';
import {
  IMenuItem
} from 'src/app/InterfaceAPI/ImenuItem/i-menu-item';
import {
  ServiceMenuItemCategoryService
} from 'src/app/ServicesAPI/serviceMenuItemCategory/service-menu-item-category.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  SeviceMenuItemService
} from 'src/app/ServicesAPI/serviceMenuItem/sevice-menu-item.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {
  menuLst: IMenuItem[]=[];
  fiteredMenuLst: IMenuItem[]=[];
  cartLst:OrderItemInCart[]=[];
  id:number;
  catName:string;
  restDetails:any={}
  totalPrice:number;
  restaurant:any;

  constructor(private route: ActivatedRoute,
    private menu: SeviceMenuItemService,
    private cartService:ShoppingCartService,
    private locSer:StoreLocationService,
    private storeSer:ServiceStoreService) {
      this.id=+this.route.snapshot.paramMap.get('id');
      
    }

  ngOnInit(): void {
    //debugger

   
    this.route.queryParamMap.subscribe(params=>{
      this.catName=params.get('catogery');
      console.log(this.catName);
      console.log(this.id);
      this.menu.getMenuItem(this.id).subscribe(res=>{
        this.menuLst = res;
        console.log(res);
        this.fiteredMenuLst=(this.catName)?
        this.menuLst.filter(m=>m.catName===this.catName):
        this.menuLst;
        console.log(this.fiteredMenuLst)
        });
   
    });
    this.cartService.countInCart().subscribe(prds=>{
      this.cartLst=prds;
      let id;
      if(prds.length==0){
        id=this.id;
      }else{
        id=+localStorage.getItem('resId');
      }
      this.storeSer.getStoreById(id).subscribe(r=>{
        this.restaurant=r;
      })
      this.totalPrice=prds.reduce((acc,item)=>{
        return acc+item.totalPrice;
      },0)
    });
      this.restDetails.id=this.id;
      this.restDetails.state=this.route.snapshot.queryParamMap.get('state');
      this.restDetails.area=this.route.snapshot.queryParamMap.get('area');
      console.log(this.restDetails);

  }
  removeFromCart(menuItem){
    console.log(menuItem);
    this.cartService.remove(menuItem);
  }
  addToCart(menuItem){

    this.cartService.add(menuItem);
  
  }
  getPrice(prd:OrderItemInCart){
    if(prd.discount){
      let off=(prd.discount/100)*prd.price;
      return (prd.price - off)*prd.quantity;
    }
    return prd.price*prd.quantity;
  }

}
