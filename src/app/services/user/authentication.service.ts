import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // private _registerUrl= 'http://localhost:1337/users/register';
  // private _loginUrl= 'http://localhost:1337/users/login';
  private _registerUrl= 'https://khbzd5q624.execute-api.eu-west-3.amazonaws.com/dev/users/register';
  private _loginUrl= 'https://khbzd5q624.execute-api.eu-west-3.amazonaws.com/dev/users/login';
  registerUserData = {};
  loginUserData = {};

  registerUser = (user:any) =>{
    return this.http.post<any>(this._registerUrl,user);
  }
  loginUser = (user:any) =>{
    return this.http.post<any>(this._loginUrl,user);
  }
  loggedIn = () => {
    return !!localStorage.getItem('token');
  }
  getToken = () => {
    const X=localStorage.getItem('token');
    console.log(X);
    return X;
  }
  loggoutUser = () => {
    localStorage.removeItem('token');
  }
  constructor(private http: HttpClient) { }
}
