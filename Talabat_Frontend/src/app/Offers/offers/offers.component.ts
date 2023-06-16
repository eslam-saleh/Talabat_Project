import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
RestImg1:string;
  constructor() { }

  ngOnInit(): void {
    this.RestImg1="assets/Resturants/Rest1.jpg";
  }

}
