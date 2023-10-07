import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { CartService } from '../services/cart.service';
import { product_Data } from '../data';
import products_data from 'products-list.json';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter: number = 0;
  Cart : any[]=[]
  totalPrice: number = 0;

  constructor(private counterServ: CounterService ,private cartService: CartService) {
    this.Cart = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  ngOnInit() {
    this.counterServ
      .getCounterVal()
      .subscribe((val: number) => (this.counter = val));
      this.Cart = this.cartService.getCartItems();
      console.log('cart',this.Cart)
  }
  addtoCart(product:any){
    const existingItemIndex = this.Cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      this.Cart[existingItemIndex].quantity+=1;
    } else {
      this.Cart.push({ ...product, quantity: 1 });
    }
    this.counterServ.SetCountVal(++this.counter);
    this.calculateTotalPrice();
  }
  removeFromCart(product: any) {
    const existingItemIndex = this.Cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      if (this.Cart[existingItemIndex].quantity > 1) {
        this.Cart[existingItemIndex].quantity-=1;
      } else {
        this.Cart.splice(existingItemIndex, 1);
      }

      this.counterServ.SetCountVal(--this.counter);
      this.calculateTotalPrice();
    }
  }
  decreaseCounter(item:any) {
    if(this.counter>0){
      this.counterServ.SetCountVal(--this.counter);
    }else{
      this.removeFromCart(item)
    }
    
  }
  increaseCounter() {
    this.counterServ.SetCountVal(++this.counter);
  }
  calculateTotalPrice() {
    this.totalPrice = 0; 

    for (let item of this.Cart) {
      this.totalPrice += item.price * item.quantity; 
    }
  }

}
