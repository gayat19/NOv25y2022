import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { LikeComponent } from './like/like.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { PizzaService } from './services/pizza.service';
import { PizzasComponent } from './pizzas/pizzas.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    LikeComponent,
    LoginComponent,
    PizzasComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [UserService,PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
