import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private _http: HttpClient) {}
  create(email: string, password: string, mobile: string): Observable<any> {
    console.log(this.create, 'api from service');

    return this._http.post(this.apiUrl, { email, password, mobile });
  }

  login(email: string, password: string): Observable<any> {
    return this._http
      .get<any[]>(this.apiUrl)
      .pipe(
        map((users) =>
          users.find(
            (user) => user.email === email && user.password === password
          )
        )
      );
  }
}
