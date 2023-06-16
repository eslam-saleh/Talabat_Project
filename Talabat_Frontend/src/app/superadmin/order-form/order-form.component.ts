import { ServiceStoreService } from 'src/app/ServicesAPI/serviceStore/service-store.service';
import { UserService } from 'src/app/ServicesAPI/UserServices/user.service';
import { take } from 'rxjs/operators';
import { OrderService } from './../../ServicesAPI/orderservice/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderItemService } from 'src/app/ServicesAPI/OrderItemSer/order-item.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  id;
  order:any={};
  userName;
  resName;
  orderItems$
  constructor(private route:ActivatedRoute,
    private router:Router,
    private orderSer:OrderService,
    private userSer:UserService,
    private storeSer:ServiceStoreService,
    private orderItemSer:OrderItemService) {
    this.id=+this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.orderSer.getOrderById(this.id).pipe(take(1)).subscribe(res=>{
      this.order=res;
      console.log(this.order);
      this.getUserName(this.order.userId); 
      this.getResName(this.order.restaurantId) 
    });
    if(this.id)
    this.orderItems$=this.orderItemSer.getOrderItemById(this.id);
  


   }

  ngOnInit(): void {
  
 
  }
  getUserName(id){
    console.log(id);
    this.userSer.getUserById(id).pipe(take(1)).subscribe(res=>{
      this.userName=res.firstName;
    })
  }
  getResName(id){
    this.storeSer.getStoreById(id).pipe(take(1)).subscribe(res=>{
      this.resName=res.name;
    })
  }
  getRegion(){
   return this.order.state+' , '+this.order.area+' , '+this.order.street;
  }
  delete(){
    if(!this.id)return;
    this.orderSer.delete(this.id).subscribe(res=>{
      this.router.navigate(['/admin'],{queryParams:{section:'Orders'}});

    })
  }

}
