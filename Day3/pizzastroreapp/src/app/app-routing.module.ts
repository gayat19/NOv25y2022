import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
  {path:'home',component:PizzasComponent},
  {path:'about',component:AboutUsComponent},
  {path:'cart',component:CartComponent},
  {path:'pizza/:pid',component:PizzaSingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
