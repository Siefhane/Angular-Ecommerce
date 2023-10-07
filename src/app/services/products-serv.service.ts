import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServService {

  constructor(private http: HttpClient) { }
  productlist(){
    return this.http.get('https://dummyjson.com/products', {
      headers: {
        'Accept-language': 'ar',
      },
    });
  }


  getProductDetails(id: any) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

}
