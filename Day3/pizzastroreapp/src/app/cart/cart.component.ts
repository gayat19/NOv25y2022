import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../models/pizza.model';
import { CartService } from '../services/cart.service';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:number[];
  cartPrice:number[];
  totalPrice:number;
  pizzas:Pizza[];
  constructor(private cartService:CartService,
            private pizzaService:PizzaService,
              private router:Router) { 
     this.totalPrice =0;
    this.pizzas =[];
    this.cartItems = this.cartService.getCart();
    this.cartPrice=[];
    this.pizzaService.callGetPizzaFromAPI().subscribe(data=>{
      this.pizzas = data as Pizza[];
      this.cartItems.forEach(element => {
      console.log("ID"+element)
      for (let i = 0; i < this.pizzas.length; i++) {
        console.log(this.pizzas[i])
       if(this.pizzas[i].id==element)
          {
            this.cartPrice.push(this.pizzas[i].price)
          this.totalPrice = this.totalPrice+this.pizzas[i].price
          }
      }
    });
    })
    

  }

  showPizza(item:number){
    this.router.navigate(["pizza",item])
  }
  ngOnInit(): void {
  }

}
