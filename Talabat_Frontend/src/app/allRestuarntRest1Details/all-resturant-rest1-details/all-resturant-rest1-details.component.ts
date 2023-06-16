import { Component, OnInit } from '@angular/core';
import { Icomment } from 'src/app/InterfaceAPI/Icomment/icomment';
import { ServiceCommentService } from 'src/app/ServicesAPI/serviceComment/service-comment.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-all-resturant-rest1-details',
  templateUrl: './all-resturant-rest1-details.component.html',
  styleUrls: ['./all-resturant-rest1-details.component.css']
})
export class AllResturantRest1DetailsComponent implements OnInit {
coverImage :string;
coverImage2 :string;
rest1Image:string;
dishImg:string;
comments : Icomment[];
comment : Icomment;
hide:boolean
  constructor(private serviceComment:ServiceCommentService) {
    this.comment={
    note:"",
    deliveryRate:null,
    storeRate:null,
    storeId:6,
    userId:1,
    }
this.hide=true;

   }
 
  ngOnInit(): void {
this.rest1Image="assets/Resturants/Rest1.jpg";
    this.coverImage="assets/LoginForm/bgLoginForm1.jpg";
    this.coverImage2="assets/ResturantPhotos/Img1.jpg";
    this.dishImg="assets/ResturantPhotos/dishImg.JPG";

    this.serviceComment.getCommemt().subscribe(
      (data) => this.comments = data,
      (error) => console.log(error)

    )
  }
  onSubmit(form:NgForm):void{
   this.hide=false;
    // debugger
    // // method insert to save userDB
    this.serviceComment.insertComment(this.comment).subscribe(
      (data)=>console.log(data),
      (error)=>console.log(error)
    );
    console.log(form);
}
}
