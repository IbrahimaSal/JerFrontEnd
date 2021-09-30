import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // private cartService:CartService
    ) { }

  ngOnInit(): void {
  }
  indexOfCurrentBox = 1; 
  changeCurentIndex = (index: number) => {
    this.indexOfCurrentBox=index;
  }
  displayState = (index : number) => {
    return this.indexOfCurrentBox===index?'flex':'none';
  }
  backgroundColor = ( index : number) =>{
    if (index === this.indexOfCurrentBox){
      return 'red';
    }
    else{
      return 'transparent';
    }
  }
  // abonnements=this.cartService.abonnements;
  // addToCart=this.cartService.addToCart;
}
