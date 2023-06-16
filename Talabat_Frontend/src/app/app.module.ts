import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { ContentComponent } from './content/content/content.component';
import { RegisterFormComponent } from './RegisterForm/register-form/register-form.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { PageContentComponent } from './page-content/page-content.component';
import { LoginformComponent } from './loginFrom/loginform/loginform.component';
import { BecomepartenerComponent } from './becomepartener/becomepartener.component';
import { PagenotfoundComponent } from './pageNotFound/pagenotfound/pagenotfound.component';
import { AllResturantRest1DetailsComponent } from './allRestuarntRest1Details/all-resturant-rest1-details/all-resturant-rest1-details.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllResturantRest1MenuComponent } from './allResturantRest1Menu/all-resturant-rest1-menu/all-resturant-rest1-menu.component';
import {MatTabsModule} from '@angular/material/tabs';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/Expansion';
import { AllResturants02Component } from './allResturants02/all-resturants02/all-resturants02.component';
import { ShoppingCartComponent } from './shoppingCart/shopping-cart/shopping-cart.component';
import { ResturantsAccordingToLocationComponent } from './resturantsAccordingToLocation/resturants-according-to-location/resturants-according-to-location.component';
import { OffersComponent } from './Offers/offers/offers.component';
import { OffersRest1Component } from './OffersRest1/offers-rest1/offers-rest1.component';
import { CheckOutComponent } from './checkOut/check-out/check-out.component';
// import {​​ NgbModule }​​ from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ResturantsAtLocation01Component } from './resturantsAtLocation01/resturants-at-location01/resturants-at-location01.component';
import {MatMenuModule} from '@angular/material/menu';
import { ResturantsAtLocation02Component } from './resturantsAtLocation02/resturants-at-location02/resturants-at-location02.component';
import { AddingProductsAndStoresComponent } from './addingProductsAndStores/adding-products-and-stores/adding-products-and-stores.component';
import { RestaurantMenuComponent } from './restaurant-Menu/restaurant-menu/restaurant-menu.component';
import { MenuItemCatogeryComponent } from './menu-item-catogery/menu-item-catogery.component';
import { MenuItemCardComponent } from './menu-item-card/menu-item-card.component';
import { RestaurantFormComponent } from './superadmin/restaurant-form/restaurant-form.component';
import { SuperAdminComponent } from './superadmin/super-admin/super-admin.component';
import { ManageRestaurantComponent } from './superadmin/manage-restaurant/manage-restaurant.component';
import { ManageUserComponent } from './superadmin/manage-user/manage-user.component';
import { UserFormComponent } from './superadmin/user-form/user-form.component';
import { ManageOrderComponent } from './superadmin/manage-order/manage-order.component';
import { OrderFormComponent } from './superadmin/order-form/order-form.component';
import { RestaursntAdminComponent } from './restaurant admin/restaursnt-admin/restaursnt-admin.component';
import { MenuItemFormComponent } from './restaurant admin/menu-item-form/menu-item-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ContentComponent,
    RegisterFormComponent,
    PageContentComponent,
    LoginformComponent,
    BecomepartenerComponent,
    PagenotfoundComponent,
    AllResturantRest1DetailsComponent,
    AllResturantRest1MenuComponent,
    AllResturants02Component,
    ShoppingCartComponent,
    ResturantsAccordingToLocationComponent,
    OffersComponent,
    OffersRest1Component,
    CheckOutComponent,
    ResturantsAtLocation01Component,
    ResturantsAtLocation02Component,
    AddingProductsAndStoresComponent,
    RestaurantMenuComponent,
    MenuItemCatogeryComponent,
    MenuItemCardComponent,
    RestaurantFormComponent,
    SuperAdminComponent,
    ManageRestaurantComponent,
    ManageUserComponent,
    UserFormComponent,
    ManageOrderComponent,
    OrderFormComponent,
    RestaursntAdminComponent,
    MenuItemFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    // DragDropModule,
    MatExpansionModule,
    ToastrModule.forRoot(),
    MatMenuModule
    // NgModule

    ],exports:[
      MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
