import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser:Login

  constructor(private loginService:UserService) {
    this.loginUser = new Login();
   }

   assignValue(username:any){
    console.log(username.value)
    this.loginUser.username = username.value
}
  ngOnInit(): void {
  }
  login(){
    let result = this.loginService.checkLogin(this.loginUser);
    if(result)
      alert("Welcome")
    else
      alert("Get lost")
  }
  reset(){
    
  }
}
