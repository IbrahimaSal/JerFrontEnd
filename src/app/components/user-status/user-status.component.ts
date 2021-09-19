import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/user/authentication.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {  
  }

  ngOnInit(): void {
  }

  loggedIn:boolean = this.authenticationService.loggedIn();

  panier:number=0;
}
