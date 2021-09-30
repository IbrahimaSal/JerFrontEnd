import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUserDocument, IUserModel } from 'src/app/interfaces/User';
// import  fetch  from 'node-fetch';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // private _registerUrl= 'http://localhost:1337/users/register';
  // private _loginUrl= 'http://localhost:1337/users/login';
  private APIEndpoint = 'https://khbzd5q624.execute-api.eu-west-3.amazonaws.com/dev';
  private _registerUrl= `${this.APIEndpoint}/users/register`;
  private _loginUrl= `${this.APIEndpoint}/users/login`;
  private _allUsers=`${this.APIEndpoint}/users/get/all`;
  registerUserData = {};
  loginUserData = {};


  getAllUsers = async () :Promise<{users:IUserModel[],count:number}> =>{
    // let result:IUserModel[] =[];
    // var myInit = { method: 'GET',
    //           //  headers: myHeaders,
    //            mode: 'cors',
    //            cache: 'default' };
      try{
        return await (await fetch(this._allUsers)).json();
      }
      catch(err){
        console.log(err);
        return {users:[],count:0};        
      }
      // .then( response => response.json())
      // .then(data => {
      //   return data.users;
      //   })
      // .catch(err => console.log(err));
  }
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
    localStorage.removeItem('cart');
  }
  constructor(private http: HttpClient) { }
}
