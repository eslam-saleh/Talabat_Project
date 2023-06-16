import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ImenuCategotry } from 'src/app/InterfaceAPI/ImenuCategotry/imenu-categotry';
import { IMenuItem } from 'src/app/InterfaceAPI/ImenuItem/i-menu-item';
import { ImenuItemCategory } from 'src/app/InterfaceAPI/ImenuItemCategory/imenu-item-category';
import { SeviceMenuItemService } from 'src/app/ServicesAPI/serviceMenuItem/sevice-menu-item.service';
import { ServiceMenuItemCategoryService } from 'src/app/ServicesAPI/serviceMenuItemCategory/service-menu-item-category.service';



@Component({
  selector: 'app-all-resturant-rest1-menu',
  templateUrl: './all-resturant-rest1-menu.component.html',
  styleUrls: ['./all-resturant-rest1-menu.component.css']
})
export class AllResturantRest1MenuComponent implements OnInit {
  rest1Image:string;
  rest1Rate:string;
  rest1RateVGood:string;
  img:string;
  menuItem:IMenuItem[];
  menuCategory:ImenuItemCategory[];
  category:string;
  categoryId:number;

  filteredMenuItem : IMenuItem[];
   constructor(route:ActivatedRoute,private SeviceMenuItem:SeviceMenuItemService,private ServiceMenuItemCategory:ServiceMenuItemCategoryService) {
    // debugger
    this.SeviceMenuItem.getMenuItem(2).subscribe((data)=>{
     this.menuItem=data,
     console.log(this.menuItem)
  
    route.queryParamMap.subscribe(
       param=>{
        // debugger
         this.category = param.get('category');
         console.log(this.category)
         console.log(typeof(this.category))
         this.categoryId = parseInt(this.category);
         this.filteredMenuItem = ( this.categoryId)?
         this.menuItem.filter(m=>m.id=== this.categoryId):this.menuItem;
         console.log(this.filteredMenuItem)
       }
     )
      })

    this.img="assets/MenuItems/imgSalad1.jpg";
    }

  ngOnInit(): void {
this.rest1Image="assets/Resturants/Rest1.jpg";
this.rest1Rate ="assets/resturantRates/rest1Rate.JPG";
this.rest1RateVGood ="assets/resturantRates/rest1Ratevgood.JPG";
// this.menuItem=[
//   {img:"assets/MenuItems/imgSalad1.jpg", dishName:"Green Salad",price:15,cateName:"Salad"},
//   {img:"assets/MenuItems/imgSalad1.jpg", dishName:"Baba Ghannoug Salad",price:25,cateName:"Salad"},
//   {img:"assets/MenuItems/imgSalad1.jpg", dishName:"Yogurt Salad",price:35,cateName:"Salad"},
//   {img:"assets/MenuItems/imgSalad1.jpg", dishName:"Garlic Dip",price:35,cateName:"Salad"},
//   {img:"assets/MenuItems/imgFoul1.jpg", dishName:"Foul With Mixture Sandwich",price:7,cateName:"FoulSandwishes"},
//   {img:"assets/MenuItems/imgFoul1.jpg", dishName:"Foul With Olive Oil Sandwich",price:10,cateName:"FoulSandwishes"},
//   {img:"assets/MenuItems/imgFoul1.jpg", dishName:"Special Foul Sandwich",price:10,cateName:"FoulSandwishes"},
//   {img:"assets/MenuItems/imgFoul1.jpg", dishName:"Foul With Eggs Sandwich",price:10,cateName:"FoulSandwishes"},
//   {img:"assets/MenuItems/imgPizza1.jpg", dishName:"Margherita Pizza",price:35,cateName:"Pizza"},
//   {img:"assets/MenuItems/imgPizza1.jpg", dishName:"Hot Dog Pizza",price:35,cateName:"Pizza"},
//   {img:"assets/MenuItems/imgPizza1.jpg", dishName:" Mushroom Pizza",price:35,cateName:"Pizza"},
//   {img:"assets/MenuItems/imgPizza1.jpg", dishName:" Tuna Pizza",price:35,cateName:"Pizza"},
//   {img:"assets/MenuItems/imgRice1.jpg", dishName:"White Rice",price:35,cateName:"Rice"},
//   {img:"assets/MenuItems/imgRice1.jpg", dishName:"Vermicelli Rice",price:35,cateName:"Rice"},
//   {img:"assets/MenuItems/imgRice1.jpg", dishName:"Sayadaia Rice",price:35,cateName:"Rice"},
//   {img:"assets/MenuItems/imgRice1.jpg", dishName:"Sayadaia Rice",price:35,cateName:"Rice"},
//  ];

//  this.menuCategory=[{Id:1,name:"Salad"}
//                     ,{Id:1,name:"Foul Sandwishes"},
//                     ,{Id:1,name:"Pizza"},
//                     ,{Id:1,name:"Rice"}

//                   ]


  // this.SeviceMenuItem.getMenuItem().subscribe(
  //   (data)=> this.menuItem=data,
  //   (error)=>console.log(error)
  // )

  // this.ServiceMenuItemCategory.getMenuItemCategory().subscribe(
  //   (data)=>this.menuCategory=data,
  //   // console.log(data),
  //   (error)=>console.log(error) 
  //)
  
  }

}
