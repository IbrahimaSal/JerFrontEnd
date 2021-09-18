import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';


import { AuthenticationService } from 'src/app/services/user/authentication.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  // private _registerUrl= 'http://localhost:1337/users/register';
  registerUserData :IUser= {
    username: '',
    password: ''
  };
  loginUserData :IUser ={
    username: '',
    password: '' 
  }
  login:boolean=true;

  constructor(private _authentication: AuthenticationService) { }

  ngOnInit(): void {
  }

  switchToLogin = () =>{
    this.login=true;
  }

  switchToRegister = () =>{
    this.login=false;
  }
  registerUser = () => {
    this._authentication.registerUser(this.registerUserData)
                        .subscribe(
                          response => console.log(response), 
                          error => console.log(error)
                        );
  } 
  loginUser = () => {
    this._authentication.loginUser(this.loginUserData)
                        .subscribe(
                          response => console.log(response), 
                          error => console.log(error)
                        );
  }  

}
