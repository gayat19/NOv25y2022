import { Pizza } from "../models/pizza.model";

export class PizzaService{
    pizzas:Pizza[];
    constructor(){
        this.pizzas = [{
            "id": 101,
            "name": "Cheese Overloaded",
            "likes": 2,
            "isFav": false,
            "pic": "assets/images/Pic1.jpg",
            "price": 275.3
          },
          {
            "id": 102,
            "name": "Veg Extravanganza",
            "likes": 0,
            "isFav": false,
            "pic": "assets/images/Pic2.jpg",
            "price": 450.75
          }]
    }
    getPizzas(){
      return this.pizzas;
    }
}