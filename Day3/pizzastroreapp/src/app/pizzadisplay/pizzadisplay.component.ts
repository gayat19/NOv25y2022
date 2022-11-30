import { getInstructionStatements } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizzadisplay',
  templateUrl: './pizzadisplay.component.html',
  styleUrls: ['./pizzadisplay.component.css']
})
export class PizzadisplayComponent implements OnInit {

  @Input() pizzaId:number;
  pizza: Pizza;
  count:number;
  constructor(private pizzaService:PizzaService) { 
    this.count=0;
    this.pizzaId = 0;
    this.pizza = new  Pizza();
    this.pizzaService.callGetPizzaFromAPI().subscribe(data=>{
      (data as Pizza[]).forEach(element => {
        if(element.id==this.pizzaId)
          this.pizza = element as Pizza
      });
    })

  }

  increment(){
    this.count++;
    //alert(this.count)
  }
  decrement(){
    this.count--;
    //alert(this.count)
  }
  ngOnInit(): void {
  }

}
