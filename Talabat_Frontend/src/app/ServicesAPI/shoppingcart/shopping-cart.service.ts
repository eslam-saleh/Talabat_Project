import { OrderItemInCart } from './../../InterfaceAPI/order-item';
import {
  Injectable
} from '@angular/core';
import {
  IMenuItem
} from 'src/app/InterfaceAPI/ImenuItem/i-menu-item';
import { BehaviorSubject, from, Observable ,of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItemLst: OrderItemInCart[];
  private sub=new BehaviorSubject<OrderItemInCart[]>(this.getOrCreateCart());

  constructor() {
   // this.sub.next(this.getOrCreateCart());
  }
  countInCart():Observable<OrderItemInCart[]>{
    //debugger
    return  this.sub.asObservable();
  }
  add(p: IMenuItem) {
    //debugger
    this.cartItemLst = this.getOrCreateCart();
    let itemInCart:any;
    let found=this.cartItemLst.some(item=>{
      if(item.id===p.id){
          itemInCart=item;
          return true;
        }
        return false;
    });
    if(found){
      itemInCart.quantity++;
      itemInCart.totalPrice += itemInCart.actPrice;

       
    }
    else{
      itemInCart=p;
      itemInCart.actPrice=this.getActPrice(p) 
      itemInCart.totalPrice= itemInCart.actPrice;
      itemInCart.quantity=1;
      this.cartItemLst.push(itemInCart);
    }
    console.log(this.cartItemLst); 
    this.sub.next(this.cartItemLst);
    localStorage.setItem('cart',JSON.stringify(this.cartItemLst));
  }
  remove(p:IMenuItem){
    this.cartItemLst = this.getOrCreateCart();
    let itemInCart:any;
    let found=this.cartItemLst.some(item=>{
      if(item.id===p.id){
          itemInCart=item;
          return true;
        }
        return false;
    });
    if(found){
      if(itemInCart.quantity===1){
        this.cartItemLst=this.cartItemLst
          .filter(item=>item!==itemInCart);
      }else{
        itemInCart.quantity--;
        itemInCart.totalPrice -= itemInCart.actPrice;

      }   
    }
     console.log(this.cartItemLst); 
     this.sub.next(this.cartItemLst);
    localStorage.setItem('cart',JSON.stringify(this.cartItemLst));
  }
  private getOrCreateCart():OrderItemInCart[] {
    let cart = localStorage.getItem('cart');
    if(cart)
      return JSON.parse(cart);
    return  [];
  }
  clearCart(){
    localStorage.removeItem('cart');
    localStorage.removeItem('resId')
    localStorage.removeItem('state')
    localStorage.removeItem('area')
    this.sub.next([]);
  }
  getActPrice(prd){
    if(prd.discount){
      let off=(prd.discount/100)*prd.price;
      return (prd.price - off);
    }
    return prd.price;
  }
  getTotalPrice(prd){
    if(prd.discount){
      let off=(prd.discount/100)*prd.price;
      return (prd.price - off)*prd.quantity;
    }
    return prd.price*prd.quantity;

  }
}
