import { MenuItemFormComponent } from './restaurant admin/menu-item-form/menu-item-form.component';
import {
  AuthGuard
} from './ServicesAPI/authguard/auth-guard.service';
import {
  OrderFormComponent
} from './superadmin/order-form/order-form.component';
import {
  SuperAdminComponent
} from './superadmin/super-admin/super-admin.component';
import {
  RestaurantFormComponent
} from './superadmin/restaurant-form/restaurant-form.component';
import {
  RestaurantMenuComponent
} from './restaurant-Menu/restaurant-menu/restaurant-menu.component';
import {
  AllResturants02Component
} from './allResturants02/all-resturants02/all-resturants02.component';
import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule,
  CanActivate
} from '@angular/router';
import {
  AddingProductsAndStoresComponent
} from './addingProductsAndStores/adding-products-and-stores/adding-products-and-stores.component';
import {
  AllResturantRest1DetailsComponent
} from './allRestuarntRest1Details/all-resturant-rest1-details/all-resturant-rest1-details.component';
import {
  BecomepartenerComponent
} from './becomepartener/becomepartener.component';
import {
  CheckOutComponent
} from './checkOut/check-out/check-out.component';
import {
  ContentComponent
} from './content/content/content.component';
import {
  LoginformComponent
} from './loginFrom/loginform/loginform.component';
import {
  OffersComponent
} from './Offers/offers/offers.component';
import {
  OffersRest1Component
} from './OffersRest1/offers-rest1/offers-rest1.component';
import {
  PagenotfoundComponent
} from './pageNotFound/pagenotfound/pagenotfound.component';
import {
  RegisterFormComponent
} from './RegisterForm/register-form/register-form.component';
import {
  ResturantsAtLocation01Component
} from './resturantsAtLocation01/resturants-at-location01/resturants-at-location01.component';
import {
  ResturantsAtLocation02Component
} from './resturantsAtLocation02/resturants-at-location02/resturants-at-location02.component';
import {
  ShoppingCartComponent
} from './shoppingCart/shopping-cart/shopping-cart.component';
import {
  UserFormComponent
} from './superadmin/user-form/user-form.component';
import { AdminAuthGuard } from './ServicesAPI/adminAuthGuard/admin-auth-guard.service';
import { RestaursntAdminComponent } from './restaurant admin/restaursnt-admin/restaursnt-admin.component';

const routes: Routes = [{
    path: 'Home',
    component: ContentComponent
  },
  {
    path: 'Login',
    component: LoginformComponent
  },
  {
    path: 'Register',
    component: RegisterFormComponent
  },
  {
    path: 'RegisterPartener',
    component: BecomepartenerComponent
  },
  /*{path:'Product/:pid',component:ProductdetailsComponent},*/

  {
    path: 'AllResturants/Rest1/Details',
    component: AllResturantRest1DetailsComponent
  },
  {
    path: 'AllResturants/Rest1/Details/Menu/:id',
    component: RestaurantMenuComponent
  },
  {
    path: 'AllResturants',
    component: AllResturants02Component
  },
  {
    path: 'MyCart',
    component: ShoppingCartComponent
  },
  {
    path: 'admin/restaurant/new',
    component: RestaurantFormComponent,
    canActivate: [AuthGuard,AdminAuthGuard]
  },
  {
    path: 'restaurant/admin/new',
    component: MenuItemFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'restaurant/admin/:id',
    component: MenuItemFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'restaurant/admin',
    component: RestaursntAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/user/new',
    component: UserFormComponent
    ,canActivate:[AuthGuard,AdminAuthGuard]
  },
  {
    path: 'admin/restaurant/:id',
    component: RestaurantFormComponent
    ,canActivate:[AuthGuard,AdminAuthGuard]
  },
  {
    path: 'admin/order/:id',
    component: OrderFormComponent
    ,canActivate:[AuthGuard,AdminAuthGuard]
  },
  {
    path: 'admin',
    component: SuperAdminComponent
    ,canActivate:[AuthGuard,AdminAuthGuard]
  },

  {
    path: 'Offers/Rest1/Details',
    component: OffersRest1Component
  },
  {
    path: 'Offers',
    component: OffersComponent
  },
  {
    path: 'MyCart/CheckOut',
    component: CheckOutComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'ResturantsAtLocation01',
    component: ResturantsAtLocation01Component
  },
  {
    path: 'ResturantsAtLocation02',
    component: ResturantsAtLocation02Component
  },
  {
    path: 'RegisterPartener/addStores',
    component: AddingProductsAndStoresComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
