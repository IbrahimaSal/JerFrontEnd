import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleriesService {

  constructor() { }

  private GIRL: any = [...Array(36).keys()].map( (n) => (
    { 
      id: n,
      src: `https://sjohansson.s3.eu-west-3.amazonaws.com/${n}.jpg`
    }
  ))
  private MEN: any = [...Array(28).keys()].map( (n) => (
    { 
      id: n,
      src: `https://fashionmen.s3.eu-west-3.amazonaws.com/${n}.jpg`
    }
  ))
  
  private clothes: any = [...Array(18).keys()].map( (n) => (
    { 
      id: n,
      src: `https://fashionclothes.s3.eu-west-3.amazonaws.com/${n}.jpg`
    }
  ))
  public getClothes() {
    return this.clothes;
  }
  public getMen() {
    return this.MEN;
  }
  public getGIRL() {
    return this.GIRL;
  }
}
