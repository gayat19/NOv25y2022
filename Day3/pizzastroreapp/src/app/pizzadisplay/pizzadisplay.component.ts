import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizzadisplay',
  templateUrl: './pizzadisplay.component.html',
  styleUrls: ['./pizzadisplay.component.css']
})
export class PizzadisplayComponent implements OnInit {

  @Input() pizzaId:number;
  @Output() changeCount:EventEmitter<number>;
  pizza: Pizza;
  count:number;
  constructor(private pizzaService:PizzaService) { 
    this.count=1;
    this.pizzaId = 0;
    this.pizza = new  Pizza();
    this.pizzaService.callGetPizzaFromAPI().subscribe(data=>{
      (data as Pizza[]).forEach(element => {
        if(element.id==this.pizzaId)
          this.pizza = element as Pizza
      });
    })
    this.changeCount = new EventEmitter<number>();
  }

  increment(){
    this.count++;
    this.changeCount.emit((this.count*this.pizza.price));
    //alert(this.count)
  }
  decrement(){
    this.count--;
    this.changeCount.emit((this.count*this.pizza.price));
    //alert(this.count)
  }
  ngOnInit(): void {
  }

}
