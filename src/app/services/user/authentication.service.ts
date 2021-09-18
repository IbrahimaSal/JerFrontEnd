import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl= 'http://localhost:1337/users/register';
  private _loginUrl= 'http://localhost:1337/users/login';
  registerUserData = {};
  loginUserData = {};

  registerUser = (user:any) =>{
    return this.http.post<any>(this._registerUrl,user);
  }
  loginUser = (user:any) =>{
    return this.http.post<any>(this._loginUrl,user);
  }


  constructor(private http: HttpClient) { }
}
