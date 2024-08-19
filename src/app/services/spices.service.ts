import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpicesService {
public apiPoint="http://localhost:3000/spices"
  constructor( private _http:HttpClient) { }

  getAllSpices():Observable<any>{
return this._http.get<any>(this.apiPoint)
  }
}
