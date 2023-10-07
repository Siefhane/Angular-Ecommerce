import { Component } from '@angular/core';
import { product_Data } from '../data';
import products_data from 'products-list.json'
import { ProductsServService } from '../services/products-serv.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 //products: Array <product_Data> =products_data
 products: product_Data[] = [];   
 loader: boolean = false;
constructor(private prodServ :ProductsServService){}
  ngOnInit(){
    this.prodServ.productlist().subscribe((data: any) => {
      if (data && data.products && Array.isArray(data.products)) {
        this.products = data.products as product_Data[];}
    },
      (error) => console.log(error),
      () => this.loader = false
    );
  } 
}
