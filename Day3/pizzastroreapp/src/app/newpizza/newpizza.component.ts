import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-newpizza',
  templateUrl: './newpizza.component.html',
  styleUrls: ['./newpizza.component.css']
})
export class NewpizzaComponent implements OnInit {

  pizza:Pizza;
  myFrom:FormGroup;
  constructor(private pizzaService:PizzaService) { 
    this.pizza = new Pizza();
    this.myFrom = new FormGroup({
      "pname":new FormControl(null,
                    [Validators.required,Validators.minLength(3)]),
      "pprice":new FormControl(null,Validators.required),
      "ppic":new FormControl(null,null)
    })
  }
  
  public get pname() : any {
    return this.myFrom.get("pname")
  }
  public get pprice() : any {
    return this.myFrom.get("pprice")
  }
  public get ppic() : any {
    return this.myFrom.get("ppic")
  }
  ngOnInit(): void {
  }
  addPizza(){
    console.log(this.myFrom)
    // this.pizza.likes=0;
    // console.log(this.pizza)
    // this.pizzaService.callAddPizza(this.pizza).subscribe(data=>{
    //   console.log(data)
    // },err=>{
    //   console.log("Error")
    //   console.log(err)
    // })
  }
  changeFav(fav:any){
    this.pizza.isFav = fav;
  }
}
