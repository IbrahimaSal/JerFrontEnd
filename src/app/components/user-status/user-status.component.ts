import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/services/cart/cart.service';
import { AuthenticationService } from 'src/app/services/user/authentication.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, 
    // private _cartService:CartService
    ) { 
      // _cartService.getCart().subscribe(data => {
      //   console.log(JSON.stringify(data));
      //   this.totalPanier=data.total;
      // })
  }

  ngOnInit(): void {
  }
  totalPanier:number=0;
  loggedIn:boolean = this.authenticationService.loggedIn();
}
