import { Component } from '@angular/core';
import { product_Data } from '../data';
import { ActivatedRoute, Router } from '@angular/router';
import products_data from 'products-list.json';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: Array <product_Data> =products_data
  selected_prod_id: any = '';
  selected_prod !: any;
  constructor(private activeRoute: ActivatedRoute ,private router: Router) {}

  ngOnInit() {
    this.selected_prod_id = this.activeRoute.snapshot.params['id'];
    console.log(this.selected_prod_id);
    this.selected_prod = this.products.find((product)=> product.id == this.selected_prod_id);
    console.log(this.selected_prod);
  }
}
