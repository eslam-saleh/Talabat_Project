import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
img1:string;
img2:string;
img3:string;
img4:string;
img5:string;
img6:string;
img7:string;
img8:string;
img9:string;
img10:string;
img11:string;
img12:string;
img13:string;
img14:string;
img15:string;

sd1:string;
sd2:string;
sd3:string;
sd4:string;
sd5:string;
sd6:string;
sd7:string;
sd8:string;

constructor() { }

  ngOnInit(): void {
    this.img1 = "./assets/offersPhotos/offer1.jpg";
    this.img2 = "./assets/offersPhotos/offer2.jpg";
    this.img3 = "./assets/offersPhotos/offer3.jpg";
    this.img4 = "./assets/offersPhotos/offer4.jpg";
    this.img5 = "./assets/offersPhotos/offer5.jpg";
    this.img6 = "./assets/offersPhotos/offer6.jpg";
    this.img7 = "./assets/offersPhotos/offer7.jpg";
    this.img8 = "./assets/offersPhotos/offer8.jpg";
    this.img9 = "./assets/offersPhotos/offer9.jpg";
    this.img10 = "./assets/offersPhotos/offer10.jpg";
    this.img11 = "./assets/offersPhotos/offer11.jpg";
    this.img12 = "./assets/offersPhotos/offer12.jpg";
    this.img13 = "./assets/offersPhotos/offer13.jpg";
    this.img14 = "./assets/offersPhotos/offer14.jpg";
    this.img15 = "./assets/offersPhotos/offer15.jpg";

    this.sd1="./assets/sliderPhotos/sd12.jpg";
    this.sd2="./assets/sliderPhotos/sd10.jpg";
    this.sd3="./assets/sliderPhotos/sd9.jpg";
    this.sd4="./assets/sliderPhotos/sd7.jpg";
    this.sd5="./assets/sliderPhotos/sd5.jpg";
    this.sd6="./assets/sliderPhotos/sd3.jpg";
    this.sd7="./assets/sliderPhotos/sd4.jpg";
    this.sd8="./assets/sliderPhotos/sd11.jpg";



  }

}
