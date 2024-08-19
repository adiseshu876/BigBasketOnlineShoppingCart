import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductListDetailsType } from '../product-details';

@Injectable({
  providedIn: 'root',
})
export class AddtocartService {
  public apiKey = 'http://localhost:3000/cartlist';
  public ApiOrders = 'http://localhost:3000/orders'
  
  constructor(private _http: HttpClient) { }
  getAllCarts(): Observable<any> {
    console.log('getAllCarts from addtocart service');

    return this._http.get<any>(this.apiKey);
  }
  getAllProducts(product: ProductListDetailsType): Observable<any> {
    console.log('getAllProducts from add tocart services');

    return this._http.post<any>(this.apiKey, product);
  }
  removeList(id: number): Observable<any> {
    return this._http.delete(`${this.apiKey}/${id}`);
  }

  orderProduct(orderData: { email: string; address: string; contact: string }): Observable<any> {
    console.log('from service orders');
    // Here you can adjust the HTTP request as per your API requirements
    return this._http.post<any>(this.ApiOrders, orderData);
  }
  private totalPriceSubject = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPriceSubject.asObservable();

  setTotalPrice(price: number) {
    this.totalPriceSubject.next(price);
  }

}
