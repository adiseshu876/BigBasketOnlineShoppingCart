import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { RegistrationComponent } from './componets/registration/registration.component';
import { PasswordChangeComponent } from './componets/password-change/password-change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componets/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './shoppingComponents/product-details/product-details.component';
import { AddToCartProductsComponent } from './shoppingComponents/add-to-cart-products/add-to-cart-products.component';
import { AboutComponent } from './headercomponents/about/about.component';
import { ServiceComponent } from './headercomponents/service/service.component';
import { CatalogComponent } from './headercomponents/catalog/catalog.component';
import { OffersComponent } from './headercomponents/offers/offers.component';
import { CheckoutComponent } from './shoppingComponents/checkout/checkout.component';
import { MyOrdersComponent } from './shoppingComponents/my-orders/my-orders.component';
import { GrainsComponent } from './headercomponents/grains/grains.component';
import { SellerAuthComponent } from './seller/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerUpdateProductsComponent } from './seller/seller-update-products/seller-update-products.component';
import { SellerRegisterComponent } from './seller/seller-register/seller-register.component';
import { SellerForgetpasswordComponent } from './seller/seller-forgetpassword/seller-forgetpassword.component';
import { SearchComponent } from './search/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PasswordChangeComponent,
    HomeComponent,
    ProductDetailsComponent,
    AddToCartProductsComponent,
    AboutComponent,
    ServiceComponent,
    CatalogComponent,
    OffersComponent,
    CheckoutComponent,
    MyOrdersComponent,
    GrainsComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerUpdateProductsComponent,
    SellerRegisterComponent,
    SellerForgetpasswordComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
