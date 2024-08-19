import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrls: { [key: string]: string } = {
    SellerApis: 'http://localhost:3000/seller',
    apiUrl: 'http://localhost:3000/productsList',
    fruitsApiUrl: 'http://localhost:3000/fruits',
    oilsApiUrl: 'http://localhost:3000/oils',
    grainsApiUrl: 'http://localhost:3000/grains',
    spicesApiUrl: 'http://localhost:3000/spices',
  };

  constructor(private _http: HttpClient) {}
  searchProducts(query: string, category: 'fruitsApiUrl' | 'grainsApiUrl' | 'spicesApiUrl' | 'oilsApiUrl' | 'vegetablesApiUrl'): Observable<any> {
    const url = this.apiUrls[category];
    return this._http.get(`${url}?q=${query}`);
  }
}
