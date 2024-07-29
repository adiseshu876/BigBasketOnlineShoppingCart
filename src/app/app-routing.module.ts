import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { RegistrationComponent } from './componets/registration/registration.component';
import { PasswordChangeComponent } from './componets/password-change/password-change.component';
import { HomeComponent } from './componets/home/home.component';
import { ProductDetailsComponent } from './shoppingComponents/product-details/product-details.component';

const routes: Routes = [
  {path:'**',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'password',component:PasswordChangeComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductDetailsComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
