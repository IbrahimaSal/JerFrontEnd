import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef,
    // private cartService: CartService
    ) {
    
    // this.cartService.getCart().subscribe((data) => {
    //   console.log(JSON.stringify(data));
    //   this.totalPanier=data.total;
    //   this.message=data.message;
    // });
    // setTimeout(() => {
    //   this.cartService.getMessage().subscribe((data:string) => {    
    //     console.log(data);  
    //     this.message=data;            
    //   });      
    // });

  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // this.cartService.getMessage().subscribe((data:string) => {    
    //   console.log(data);  
    //   this.message=data;            
    // });      
    // this.cd.detectChanges();
  }

  // listOfProducts = this.cartService.listOfProducts;

  // removeProductFromCart = this.cartService.removeFromCart;

  message:string="";

  totalPanier:number =0;
  
  // abonnements=this.cartService.abonnements;
}
