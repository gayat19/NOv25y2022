import { PizzaModel } from "../models/pizza.model";

export class PizzaService{
    pizzas:PizzaModel[];
    constructor(){
        this.pizzas =[
            new PizzaModel(101,"Margherita","assets/images/pic1.jpg",200.3),
            new PizzaModel(102,"Veg extravegenza","assets/images/pic2.jpg",200.3)
        ]
    }
    getPizzas(){
        return this.pizzas;
    }
}