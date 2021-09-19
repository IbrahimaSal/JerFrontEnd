import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/user/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService, private _router:Router) { }

  ngOnInit(): void {
  }
  loggoutUser = () =>{
    this.authenticationService.loggoutUser();
    this._router.navigate(['/login']);
  } 
}
