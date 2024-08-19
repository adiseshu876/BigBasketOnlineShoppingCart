import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { RegistrationComponent } from './componets/registration/registration.component';
import { PasswordChangeComponent } from './componets/password-change/password-change.component';
import { HomeComponent } from './componets/home/home.component';
import { ProductDetailsComponent } from './shoppingComponents/product-details/product-details.component';
import { AddToCartProductsComponent } from './shoppingComponents/add-to-cart-products/add-to-cart-products.component';
import { OffersComponent } from './headercomponents/offers/offers.component';
import { AboutComponent } from './headercomponents/about/about.component';
import { CatalogComponent } from './headercomponents/catalog/catalog.component';
import { ServiceComponent } from './headercomponents/service/service.component';
import { CheckoutComponent } from './shoppingComponents/checkout/checkout.component';
import { MyOrdersComponent } from './shoppingComponents/my-orders/my-orders.component';
import { GrainsComponent } from './headercomponents/grains/grains.component';
import { SellerAuthComponent } from './seller/seller-auth/seller-auth.component';
import { AuthGuard } from './seller/auth.guard';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerRegisterComponent } from './seller/seller-register/seller-register.component';
import { SearchComponent } from './search/search/search.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'password',component:PasswordChangeComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductDetailsComponent},
  {path:'addtocart',component:AddToCartProductsComponent},
  {path:'offers',component:OffersComponent}, 
  {path:'Grains',component:GrainsComponent},
  {path:'about',component:AboutComponent},
  {path:'catalog',component:CatalogComponent},
  {path:'Services',component:ServiceComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'orders',component:MyOrdersComponent},
  {path:'seller-auth',component:SellerAuthComponent,canActivate:[AuthGuard]},
  {path:'seller-register',component:SellerRegisterComponent,canActivate:[AuthGuard]},  
  {path:'seller-home',component:SellerHomeComponent,canActivate:[AuthGuard]},
  {path:'search',component:SearchComponent},
  {path:'**',component:ProductDetailsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
