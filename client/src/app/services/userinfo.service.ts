import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserinfoService {
  constructor(private _http: HttpClient, private _router: Router) {}

  RegistrUrl = '/api/server/registration';
  LoginUrl = '/api/server/login';
  Registration(data: User) {
    // console.log(data);
    return this._http.post(this.RegistrUrl, data);
  }

  login(data: User) {
    return this._http.post(this.LoginUrl, data).subscribe(
      (data: { massage: string; Token: string }) => {
        // console.log(data.Token);

        localStorage.setItem('token', 'Bearer ' + data.Token);

        this._router.navigate(['']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getToken() {
    // console.log(localStorage.getItem('token'))
    return localStorage.getItem('token');
  }
}
