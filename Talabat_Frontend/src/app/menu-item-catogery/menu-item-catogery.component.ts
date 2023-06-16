import { Component, Input, OnInit } from '@angular/core';
import { ServiceMenuItemCategoryService } from '../ServicesAPI/serviceMenuItemCategory/service-menu-item-category.service';

@Component({
  selector: 'menu-item-catogery',
  templateUrl: './menu-item-catogery.component.html',
  styleUrls: ['./menu-item-catogery.component.css']
})
export class MenuItemCatogeryComponent implements OnInit {
  @Input('catogeryName')catogeryName;
  @Input('rest-id-loc')restIsAndLoc;
  catLst: string[];
  constructor( private category: ServiceMenuItemCategoryService) { 
    
  }

  ngOnInit(): void {
    debugger
    if(!this.restIsAndLoc.id)return;
     this.category.getMenuItemCategory(this.restIsAndLoc.id).subscribe(res=>{
      this.catLst =res.map(c=>c.name);
    })
  }

}
