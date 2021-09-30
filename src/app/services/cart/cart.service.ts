import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }
  
  private messagesubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

  private cartSubject: BehaviorSubject<any> = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('cart')||'{produits:[],total:0}'));

  getMessage = () =>{
    return this.messagesubject;
  }

  getCart = () =>{
    return this.cartSubject;
  }

  listOfProducts = () =>{ 
    const panierInitial={
      produits:[],
      total:0,
      message:"il n'y rien dans votre panier",
    };
    try{
    const cart = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')||JSON.stringify(panierInitial)):panierInitial;
    const liste =cart.produits;
    if (liste.length === 0){
      console.log(liste.length)
      // this.messagesubject.next("vous n'avez que dal pour l'instant dans votre panier");      
      return [];
    }
    else{ 
      console.log(liste.length)
      // this.messagesubject.next("votre panier est composé de:");      
      return liste;
      // return liste.map((id: number)=> this.abonnements[id].nom);
    }
    }
    catch(error){
      console.log(error);
    }
    
  }

  addToCart = (index:number) => {  
    try{
    const panierInitial={
      produits:[],
      total:0,
      message:"il n'y rien dans votre panier",
    }
    const cart = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')||JSON.stringify(panierInitial)):panierInitial;
    if (cart.produits.includes(index)){
      alert(`vous avez déja :${this.abonnements[index-1].nom} dans votre panier`);      
    }
    else{
      cart.produits.push(index);
      cart.total+=this.abonnements[index-1].prix;
      cart.message="votre panier est composé de: "
      this.cartSubject.next(cart);
      localStorage.setItem('cart',JSON.stringify(cart));
    }
    }catch(error){
      console.log(error)
    }

  }

  removeFromCart = (index:number) =>{
    const panierInitial={
      produits:[],
      total:0,
      message:"il n'y rien dans votre panier",
    };
    const cart = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')||JSON.stringify(panierInitial)):panierInitial;
    if (!cart.produits.includes(index)){
      alert(`vous n'avez plus d':${this.abonnements[index-1].nom} dans votre panier`);      
    }
    else{
      cart.produits=cart.produits.filter((product: number)=>index!==product);
      cart.total-=this.abonnements[index-1].prix;
      if(cart.total === 0){
        cart.message="Il n'y a rien dans le panier !"
      }
      this.cartSubject.next(cart);
      localStorage.setItem('cart',JSON.stringify(cart));
    }
  }

  abonnements=[
    {
      numero:1,
      prix:10,
      nom:"abonnement 1",
      description: "Si tu t'abonnes à cet option, tu auras accès à : blablabla blabla blabla blablabla blabla blabla blablabla blabla blabla blablabla blabla blabla"
    },
    {
      numero:2,
      prix:20,
      nom:"abonnement 2",
      description: "Description de l'abonnement 2"
    },
    {
      numero:3,
      prix:30,
      nom:"abonnement 3",
      description: "Tu peux voir: XXXXX YYYYYY ZZZZZZ"
    }
  ]
}
