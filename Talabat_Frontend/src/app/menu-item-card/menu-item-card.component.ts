import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from './../ServicesAPI/shoppingcart/shopping-cart.service';
import { IMenuItem } from 'src/app/InterfaceAPI/ImenuItem/i-menu-item';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.css']
})
export class MenuItemCardComponent implements OnInit {
@Input('menu-item')menuItem:IMenuItem;
@Input('show-action')showAction:boolean=true;
@Input('rest-and-Loc')restAndLoc:any;
  constructor(private cartService:ShoppingCartService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  addToCart(menuItem){
    let resId=localStorage.getItem('resId')
    console.log(resId,this.restAndLoc.id)
    if(resId&&resId!=this.restAndLoc.id){
      if(confirm(`your cart not empty! order must be in one
     restaurant your cart not empty Do you want to clear it ` 
    )){
      this.cartService.clearCart();
      localStorage.setItem('resId',this.restAndLoc.id)
      localStorage.setItem('state',this.restAndLoc.state)
      localStorage.setItem('area',this.restAndLoc.area)
      // this.locSer.getAllLoc().subscribe(res=>{
      //   res.filter
      // })
      this.cartService.add(menuItem);
    }
    }else{
      this.cartService.add(menuItem);
    }
   
  }
  removeFromCart(menuItem){
    this.cartService.remove(menuItem);
  }
  getQuantity(prd:IMenuItem):number{
    let quantity=0;
    this.cartService.countInCart()
    .subscribe(items=>{
      items.some(item=>{
        if(item.id==prd.id){
          quantity=item.quantity;
          return true;
        }
        return false;
      });
    });
    return quantity;
  }


}
