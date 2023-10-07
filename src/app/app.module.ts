import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RejesterComponent } from './rejester/rejester.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProdCardComponent } from './prod-card/prod-card.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { CartComponent } from './cart/cart.component';
import { Stockpipe } from './prod-card/prod-card.component';
import { Stockcolor } from './prod-card/prod-card.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HeaderComponent,
    ProductsComponent,
    LoginComponent,
    RejesterComponent,
    ProdCardComponent,
    ProdDetailComponent,
    CartComponent,
    Stockpipe,
    Stockcolor,
    CounterComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
