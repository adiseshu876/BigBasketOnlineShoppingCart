import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSService {
public apiUrl = 'http://localhost:3000/productsList'
  constructor(private _http:HttpClient) { }



  getAllProducts():Observable<any>{
    return this._http.get(this.apiUrl)
  }
}
