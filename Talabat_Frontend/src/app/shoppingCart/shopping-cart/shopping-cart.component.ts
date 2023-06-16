import { OrderItemInCart } from './../../InterfaceAPI/order-item';
import { ShoppingCartService } from './../../ServicesAPI/shoppingcart/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartLst;
  count:number;

  constructor(private shoppingCartSer:ShoppingCartService) { 
    this.shoppingCartSer.countInCart().subscribe(res=>{
      this.cartLst=res;
      this.count=res.length;
    })
  }

  ngOnInit(): void {
  }
  getActPrice(prd:OrderItemInCart){
    if(prd.discount){
      let off=(prd.discount/100)*prd.price;
      return (prd.price - off)*prd.quantity;
    }
    return prd.price*prd.quantity;

  }
  onClick(){
    this.shoppingCartSer.clearCart();
  }
}
