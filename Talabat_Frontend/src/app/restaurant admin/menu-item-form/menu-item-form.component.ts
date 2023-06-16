import { SeviceMenuItemService } from 'src/app/ServicesAPI/serviceMenuItem/sevice-menu-item.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Iresturant } from 'src/app/InterfaceAPI/Iresturant/iresturant';
import { ServiceStoreService } from 'src/app/ServicesAPI/serviceStore/service-store.service';
import { UploadImageService } from 'src/app/ServicesAPI/upload/upload-image.service';
import { ServiceMenuItemCategoryService } from 'src/app/ServicesAPI/serviceMenuItemCategory/service-menu-item-category.service';

@Component({
  selector: 'app-menu-item-form',
  templateUrl: './menu-item-form.component.html',
  styleUrls: ['./menu-item-form.component.css']
})
export class MenuItemFormComponent implements OnInit {
  restaurant: any = {};
  id;
  file: File;
  defImg = '../../../assets/talabatImg/';
  img;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private storeser: ServiceStoreService,
    private uploadSer: UploadImageService,
    private menuSer:SeviceMenuItemService,
    private menuCat:ServiceMenuItemCategoryService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.getStoreById();

  }

  ngOnInit(): void {
  }
  save(f: Iresturant) {
    console.log(f,this.restaurant)
    if (this.file && this.file.name) {
      this.uploadSer.upload(this.file).subscribe(res => {
        debugger
        this.restaurant.image = res;
        this.img = this.defImg + res;
        //this.img=this._sanitizer.bypassSecurityTrustHtml(JSON.stringify(res));
        console.log(this.restaurant);
        this.update();

      })
    } else {
      this.update();
    }
    console.log(f);

    //this.router.navigate(['/admin']);
  }
  update() {
    if (this.id) {
      this.menuSer.update(this.id, this.restaurant).subscribe(obj => {
        //this.router.navigate(['/admin'])
      });
    } else {
      this.menuSer.create(this.restaurant).subscribe(res => {
        //this.router.navigate(['/admin'])
      })
    }
  }
  delete() {
    debugger
    if (!confirm('Are you sure you want to delete this reataurant')) return;
    this.storeser.delete(this.id).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin']);
    });


  }
  getStoreById() {
    this.storeser.getStoreById(this.id).pipe(take(1)).subscribe(res => {
      this.restaurant = res;
      this.img = this.defImg + this.restaurant.image;

      console.log(this.restaurant);

    })
  }
  onSelectFile(files: FileList) {
    this.file = files.item(0);
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.img = event.target.result;
    }
    reader.readAsDataURL(this.file)
  }

}
