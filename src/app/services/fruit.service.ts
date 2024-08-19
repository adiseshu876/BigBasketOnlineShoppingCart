import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetailsComponent } from '../shoppingComponents/product-details/product-details.component';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
public apiPoint="http://localhost:3000/fruits"
  constructor(private _http:HttpClient) { }
  getAllFruits():Observable<any>{
    console.log('service call from fruits service get method');
    
    return this._http.get<any>(this.apiPoint)
  }
  // addToCartFruits(product:ProductDetailsComponent):Observable<any>{
  //   console.log('service call from fruits service post method');
    
  //   return this._http.get<any>(this.apiPoint)
  // }
}
