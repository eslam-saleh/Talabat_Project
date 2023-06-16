import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-rest1',
  templateUrl: './offers-rest1.component.html',
  styleUrls: ['./offers-rest1.component.css']
})
export class OffersRest1Component implements OnInit {
  restaurants: any[];
  constructor() { }

  ngOnInit(): void {
    this.restaurants = [

      // restaurant 1
      {
        id: 1,
        imageUrl: "/assets/Resturants/Rest1.jpg",
        title: "Hadaek Al Shawerma",
        category : "Restaurant",
        copuns: 
        [
           {
            id : 1,
            imagUrl: "/assets/offersPhotos/offer1.jpg",
            title : " 25% Dicount ",
            description : " 25% discount when you buy over 100 EG",
            price : 40 
           },
           {
            id : 2,
            title : "50% discount",
            imagUrl: "/assets/offersPhotos/offer1.jpg",
            description : "25% discount when you buy over 100 EG",
            price : 40 
           },
          
        ],
      },
  
      // restaurant 2
      {
        id: 1,
        imageUrl: "/assets/Resturants/Rest2.jpg",
        title: "Beit Al Mashwyat",
        category : "Restaurant",
        copuns: 
        [
           {
            id : 1,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
           {
            id : 2,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
          
        ],
      },


      // restaurant 3
      {
        id: 1,
        imageUrl: "/assets/Resturants/Rest3.jpg",
        title: "owest",
        category : "Restaurant",
        copuns: 
        [
           {
            id : 1,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
           {
            id : 2,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
          
        ],
      },

      // restaurant 4
      {
        id: 1,
        imageUrl: "/assets/Resturants/Rest4.jpg",
        title: "Macdonals",
        category : "Restaurant",
        copuns: 
        [
           {
            id : 1,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
           {
            id : 2,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
          
        ],
      },

      // restaurant 5
      {
        id: 1,
        imageUrl: "/assets/Resturants/Rest5.jpg",
        title: "Dominoz Pizza",
        category : "Restaurant",
        copuns: 
        [
           {
            id : 1,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
           {
            id : 2,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
          
        ],
      },

      // restaurant 6
      {
        id: 1,
        imageUrl: "/assets/Resturants/Rest6.jpg",
        title: "Kfc",
        category : "Restaurant",
        copuns: 
        [
           {
            id : 1,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
           {
            id : 2,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
          
        ],
      },

      // restaurant 7
      {
        id: 1,
        imageUrl: "/assets/Resturants/Rest7.jpg",
        title: "koock Door",
        category : "Restaurant",
        copuns: 
        [
           {
            id : 1,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
           {
            id : 2,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
          
        ],
      },

      // restaurant 8
      {
        id: 1,
        imageUrl: "/assets/Resturants/Rest8.jpg",
        title: "Al Doctor Koshary",
        category : "Restaurant",
        copuns: 
        [
           {
            id : 1,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
           {
            id : 2,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
          
        ],
      },
      
      
      // restaurant 9
      {
        id: 1,
        imageUrl: "/assets/Resturants/Rest9.jpg",
        title: "Arabiata ",
        category : "Restaurant",
        copuns: 
        [
           {
            id : 1,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
           {
            id : 2,
            imagUrl: "1",
            title : "this is a pla ",
            description : "pla",
            price : 40 
           },
          
        ],
      }
    ]
  }

  getrest() 
  {
    return this.restaurants;
  }
  }


