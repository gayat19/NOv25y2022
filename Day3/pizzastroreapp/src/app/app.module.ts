import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaService } from './services/pizza.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { PizzadisplayComponent } from './pizzadisplay/pizzadisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    AboutUsComponent,
    CartComponent,
    PizzaSingleComponent,
    PizzadisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [PizzaService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
