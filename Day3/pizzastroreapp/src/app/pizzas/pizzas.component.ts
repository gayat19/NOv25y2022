import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../models/pizza.model';
import { CartService } from '../services/cart.service';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
pizzas:Pizza[];
  constructor(private pizzaService:PizzaService, 
              private cartService:CartService,
              private router:Router) { 
    this.pizzas =[];
    this.pizzaService.callGetPizzaFromAPI().subscribe((data)=>{
      this.pizzas = data as Pizza[];
    })
  }
  addToCart(pid:number){
    this.cartService.addItemsToCart(pid);
    alert("item added to cart "+pid)
    //this.router.navigateByUrl("cart")
  }

  updateLike(pid:any){
    // alert("clicked the like "+pid)
    this.pizzaService.callUpdateLike(pid).subscribe(result=>{
      // console.log(result);
      var pizza = result as Pizza;
      for (let index = 0; index < this.pizzas.length; index++) {
        if(pizza.id==this.pizzas[index].id)
        {
          this.pizzas[index].likes = pizza.likes;
          break;
        }

        
      }
    })
  }
  ngOnInit(): void {
  }


}
