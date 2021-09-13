import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  login:boolean=true;

  switchToLogin = () =>{
    this.login=true;
  }

  switchToRegister = () =>{
    this.login=false;
  }
  ngOnInit(): void {
  }

}
