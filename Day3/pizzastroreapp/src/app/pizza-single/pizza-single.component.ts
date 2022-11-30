import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.css']
})
export class PizzaSingleComponent implements OnInit {
pizza:Pizza;
  constructor(private route:ActivatedRoute,
    private pizzaService:PizzaService) { 
    var pizzaId = this.route.snapshot.params["pid"]
    this.pizza = new  Pizza();
    this.pizzaService.callGetPizzaFromAPI().subscribe(data=>{
      (data as Pizza[]).forEach(element => {
        if(element.id==pizzaId)
          this.pizza = element as Pizza
      });
    })
  }

  ngOnInit(): void {
  }

}
