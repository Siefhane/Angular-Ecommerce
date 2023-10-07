import { Injectable } from '@angular/core';
import { product_Data } from '../data';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart :Array<product_Data> =[]
  addToCart(item:any ) {
    this.cart.push(item);
    console.log(this.cart[0])
  }

 getCartItems() {
    return this.cart;
  }
  deleteItem(product:any){
    this.cart.splice(this.cart.indexOf(product),1)
  }
}
