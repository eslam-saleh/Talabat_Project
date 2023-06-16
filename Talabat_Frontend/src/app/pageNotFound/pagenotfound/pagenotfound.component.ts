import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
img:string;
  constructor() { }

  ngOnInit(): void {
    this.img = "assets/pageNotFound/errorPage4.jpg";
  }

}
