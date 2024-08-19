import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ProductListDetailsType } from './product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductSService {
  filter(arg0: (item: { id: number; }) => boolean): ProductSService {
    throw new Error('Method not implemented.');
  }
  public apiUrl = 'http://localhost:3000/productsList';
  // public fruitsApiUrl = 'http://localhost:3000/fruits';
  // public oilsApiUrl = 'http://localhost:3000/oils';
  // public grainsApiUrl = 'http://localhost:3000/grains';
  // public spicesApiUrl = 'http://localhost:3000/spices';

  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<ProductListDetailsType[]> {
    return this._http.get<ProductListDetailsType[]>(this.apiUrl);
  }

  








  
}
