import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrainsService {
public apiPoint="http://localhost:3000/grains"
  constructor(private _http:HttpClient) { }
  allGrains():Observable<any>{
    return this._http.get<any>(this.apiPoint)

  }
}
