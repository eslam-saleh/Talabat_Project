import {
  RestaurantCatogeryService
} from './../../ServicesAPI/restaurant-catogery-service/restaurant-catogery.service';
import {
  UploadImageService
} from './../../ServicesAPI/upload/upload-image.service';
import {
  UserService
} from 'src/app/ServicesAPI/UserServices/user.service';
import {
  ServiceStoreService
} from 'src/app/ServicesAPI/serviceStore/service-store.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Iresturant
} from 'src/app/InterfaceAPI/Iresturant/iresturant';
import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  take
} from "rxjs/operators"
import {
  SecurityContext
} from '@angular/core';
import {
  DomSanitizer
} from '@angular/platform-browser';


@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  restaurant: any = {};
  id;
  users$;
  file: File;
  defImg = '../../../assets/talabatImg/';
  img;
  catogeries$;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private storeser: ServiceStoreService,
    private userSer: UserService,
    private uploadSer: UploadImageService,
    private resCatSer: RestaurantCatogeryService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.getStoreById();
    this.users$ = this.userSer.getAllUsers();
    this.catogeries$ = this.resCatSer.getAllResCatogeries();

  }

  ngOnInit(): void {}
  save(f: Iresturant) {
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

    this.router.navigate(['/admin']);
  }
  update() {
    if (this.id) {
      this.storeser.update(this.id, this.restaurant).subscribe(obj => {
        //this.router.navigate(['/admin'])
      });
    } else {
      this.storeser.create(this.restaurant).subscribe(res => {
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
