import { OrderService } from './../../ServicesAPI/orderservice/order.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  orderes$;
  constructor(private orderSer:OrderService) {
    this.orderes$=this.orderSer.getAllOrderes();
   }

  ngOnInit(): void {
  }

}
