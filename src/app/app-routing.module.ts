import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejesterComponent } from './rejester/rejester.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path :'',
    component:ProductsComponent
  }, 
  {
    path :'products',
    component:ProductsComponent
  },
  {
    path :'rejester',
    component:RejesterComponent
  },
  {
    path :'prod-detail/:id',
    component:ProdDetailComponent
  },    
  {
    path :'cart/:id',
  component:CartComponent
  },
  {
    path :'login',
    component:LoginComponent
  }, {
    path :'counter',
    component:CounterComponent
  },
  {
    path :'**',
    component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
