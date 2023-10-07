import { Component } from '@angular/core';
import { product_Data } from '../data';
import products_data from 'products-list.json';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent {
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
  redirectToCart(id : number){ 
    this.router.navigate(['cart' , id])
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