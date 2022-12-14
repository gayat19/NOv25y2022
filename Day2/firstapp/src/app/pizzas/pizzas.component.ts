import { Component, OnInit } from '@angular/core';
import { PizzaModel } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
pizzas:PizzaModel[];
  constructor(private pizzaService:PizzaService) {
    this.pizzas = this.pizzaService.getPizzas();
   }

  ngOnInit(): void {
  }

}
