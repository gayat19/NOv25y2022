import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pizza } from "../models/pizza.model";

@Injectable()
export class PizzaService{
    pizzas:Pizza[];
    constructor(private httpClient:HttpClient){
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
    // getPizzas(){
    //   return this.pizzas;
    // }
    callGetPizzaFromAPI(){
      return this.httpClient.get("http://localhost:5298/api/Pizza");
    }
    callUpdateLike(pid:number){
      return this.httpClient.post("http://localhost:5298/api/Pizza/UpdateLike?key="+pid,null)
    }
    callAddPizza(pizza:Pizza){
      return this.httpClient.post("http://localhost:5298/api/Pizza/AddPizza",pizza)
    }
}