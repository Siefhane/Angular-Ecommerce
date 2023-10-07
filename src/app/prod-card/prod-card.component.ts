import { Component, Input } from '@angular/core';
import { product_Data } from '../data';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CounterService } from '../services/counter.service';


@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.css']
})
export class ProdCardComponent {
  @Input() product !: product_Data ;
  counter: number = 0;
  constructor(private router: Router ,private cart : CartService , private countSer : CounterService){}
  ngOnInit() {
    this.countSer.getCounterVal().subscribe((val) => (this.counter = val));
  }
 
  addToCart(product: any) { 
    const existingItemIndex = this.cart.getCartItems().findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      this.cart.getCartItems()[existingItemIndex].quantity++;
    } else {
      this.cart.addToCart({ ...product, quantity : 1 });
    }

    this.countSer.SetCountVal(++this.counter); }

  redirectToDetails(id : number){ 
    this.router.navigate(['prod-detail' , id])
  }

}

@Pipe({
  name: 'Stockpipe'
})

export class Stockpipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if(value>0){
      return 'in stock' 
    }else{
      return 'out of stock'
    }
  }
}
@Pipe({
  name: 'Stockcolor'
})
export class Stockcolor implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if(value>0){
      return 'green'
    }else{
      return 'red'
    }
  }
}