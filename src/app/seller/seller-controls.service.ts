import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { ProductListDetailsType } from '../shoppingComponents/product-details';

@Injectable({
  providedIn: 'root'
})
export class SellerControlsService {
  public SellerApis='http://localhost:3000/seller'
  public apiUrl = 'http://localhost:3000/productsList';
  public fruitsApiUrl = 'http://localhost:3000/fruits';
  public oilsApiUrl = 'http://localhost:3000/oils';
  public grainsApiUrl = 'http://localhost:3000/grains';
  public spicesApiUrl = 'http://localhost:3000/spices';


  constructor(private _http:HttpClient) { }
  // register(sellerData: any): Observable<any> {
  //   return this._http.post(`${this.apiUrl}/register`, sellerData);
  // }
  create(email: string, password: string, mobile: string): Observable<any> {
    console.log(this.create, 'api from service');

    return this._http.post(this.SellerApis, { email, password, mobile });
  }

  login(email: string, password: string): Observable<any> {
    return this._http
      .get<any[]>(this.SellerApis)
      .pipe(
        map((users) =>
          users.find(
            (user) => user.email === email && user.password === password
          )
        )
      );
  }
  getFruitsApi(): Observable<ProductListDetailsType[]> {
    return this._http.get<ProductListDetailsType[]>(this.fruitsApiUrl);
  }

  getOilsApi(): Observable<ProductListDetailsType[]> {
    return this._http.get<ProductListDetailsType[]>(this.oilsApiUrl);
  }

  getGrainsApi(): Observable<ProductListDetailsType[]> {
    return this._http.get<ProductListDetailsType[]>(this.grainsApiUrl);
  }

  getSpicesApi(): Observable<ProductListDetailsType[]> {
    return this._http.get<ProductListDetailsType[]>(this.spicesApiUrl);
  }
  deleteProduct(id: number, category: string): Observable<void> {
    const normalizedCategory = category.toLowerCase();
    let url = '';

    switch (normalizedCategory) {
      case 'vegetables':
      case 'vegetable':  // Add this if API expects singular
          url = `${this.apiUrl}/${id}`;
          break;
      case 'fruits':
          url = `${this.fruitsApiUrl}/${id}`;
          break;
      case 'oils':
      case 'oil':  // Add this if API expects singular
          url = `${this.oilsApiUrl}/${id}`;
          break;
      case 'grains':
      case 'grain':  // Add this if API expects singular
          url = `${this.grainsApiUrl}/${id}`;
          break;
      case 'spices':
      case 'spice':  // Add this if API expects singular
          url = `${this.spicesApiUrl}/${id}`;
          break;
      default:
          console.error(`Unknown category: ${category}`);
          return throwError(() => new Error(`Unknown category: ${category}`));
  }
  

    console.log(`Deleting product from URL: ${url}`);
    return this._http.delete<void>(url);
}
  
}
