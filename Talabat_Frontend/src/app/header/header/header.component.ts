import { Router } from '@angular/router';
import { UserService } from 'src/app/ServicesAPI/UserServices/user.service';
import { OrderItemInCart } from './../../InterfaceAPI/order-item';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/ServicesAPI/authService/auth.service';
import { ShoppingCartService } from 'src/app/ServicesAPI/shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
img : string;
UserEamil:any;
cartCounter:number=0;
//cart:Observable<OrderItemInCart[]>;
  constructor(private userSer:UserService,
    private cartService:ShoppingCartService,
    private route:Router) {
      
     }

  ngOnInit(): void {
    this.cartService.countInCart().subscribe(items=>{
      this.cartCounter=items.reduce((acc,item)=>{
        return acc+item.quantity;
      },0);
    });
    this.img = "./assets/logo.jpg";
  }
 


 /* open():void{
    window.open();
  }*/

  isLoggedIn(){
    return this.userSer.isLoggedIn();
  }


  logOut(){

  this.userSer.logOut();
  this.route.navigate(['/'])
  }
  isAdmin(){
    return this.userSer.isAdmin();
  }
  getUserName(){
    return this.userSer.getUserName();
  }
  
}
