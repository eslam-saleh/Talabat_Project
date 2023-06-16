import { SeviceMenuItemService } from 'src/app/ServicesAPI/serviceMenuItem/sevice-menu-item.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceStoreService } from 'src/app/ServicesAPI/serviceStore/service-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaursnt-admin',
  templateUrl: './restaursnt-admin.component.html',
  styleUrls: ['./restaursnt-admin.component.css']
})
export class RestaursntAdminComponent implements OnInit {
  sectionLst:any[];
  menuLst:any[];
  id:number;
  constructor(private storeSer:ServiceStoreService,
    private route:ActivatedRoute,
    private menuSer:SeviceMenuItemService) {
    this.storeSer.getStoreByUser().subscribe(res=>{
      this.sectionLst=res;
      this.route.queryParamMap.subscribe(params=>{
        this.id=+params.get('section');
        if(!this.id){
          if(this.sectionLst.length>0){
            this.id=this.sectionLst[0].id;
            this.getmenuItem()
          }     
        }else{
          this.getmenuItem();
        }
        
  
      })
    })

   }

   getmenuItem(){
    this.menuSer.getMenuItem(this.id).subscribe(m=>{
      this.menuLst=m;
    })
   }
  ngOnInit(): void {
  }

}
