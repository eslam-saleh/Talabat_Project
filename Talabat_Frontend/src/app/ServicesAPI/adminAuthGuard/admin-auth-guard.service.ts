import { UserService } from 'src/app/ServicesAPI/UserServices/user.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private userSer:UserService,
    private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.userSer.isAdmin())return true;

    this.router.navigate(['/']);
    return false;

  }
}
