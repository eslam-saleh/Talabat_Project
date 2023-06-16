import { Router } from '@angular/router';
import { AlertifyNotificationServiveService } from './../../ServicesAPI/alertifyNotificationService/alertify-notification-servive.service';
import { OrderItemService } from 'src/app/ServicesAPI/OrderItemSer/order-item.service';
import { OrderService } from './../../ServicesAPI/orderservice/order.service';
import { IOrder } from './../../InterfaceAPI/IOrder/iorder';
import { ShoppingCartService } from './../../ServicesAPI/shoppingcart/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { OrderItemInCart } from 'src/app/InterfaceAPI/order-item';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cartLst:OrderItemInCart[];
  total:number;
  serviceCharge:number;
  orderItems:any[]=[];
  state;
  area;
  restId;
  constructor(private cartSer:ShoppingCartService,
   private orderSer: OrderService,
   private orderItemService:OrderItemService,
   private notify:AlertifyNotificationServiveService,
   private router:Router) { 
    this.cartSer.countInCart().subscribe(res=>{
      this.cartLst=res;
      this.total=this.cartLst.reduce((acc,item)=>{
        return acc+item.totalPrice;
      },0);
      this.serviceCharge=this.total*5/100;
    })
  }

  ngOnInit(): void {
    this.restId=localStorage.getItem('resId')
    this.state=localStorage.getItem('state')
    this.area=localStorage.getItem('area')
  }

  makeOrder(f){
  console.log(f)
  let order=f.value;
  order.price=this.total+this.serviceCharge;
  order.state=localStorage.getItem('state');
  order.area=localStorage.getItem('area');
  order.restaurantId=localStorage.getItem('resId');
  
  this.orderSer.create(order).subscribe(res=>{
    console.log(res.id);
    this.cartLst.forEach(item=>{
      let oItem:any={};
      oItem.orderId=res.id;
      oItem.quantity=item.quantity;
      oItem.price=item.totalPrice;
      oItem.menuItemId=item.id;
      this.orderItems.push(oItem);
    })
    this.orderItemService.create(this.orderItems).subscribe(res=>{
      this.notify.showSuccess("Your Order Placed Successfully", "Congurats")
      this.cartSer.clearCart();
     
      this.router.navigate(['/'])
    })
  })

  
  
  // order.street=f.street;
  // order.buildingNumber=f.buildingNumber;
  // order.phoneNumber=f.phoneNumber;
  // 
  //console.log(order)
  }
}
