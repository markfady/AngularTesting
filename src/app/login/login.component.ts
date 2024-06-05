import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  isLoggedIn:boolean
  constructor(){
    this.isLoggedIn=false
  }
  ngOnInit(): void {}

  login():void{
    this.isLoggedIn=!this.isLoggedIn
  }
  get loginState():string{
    return `User is ${this.isLoggedIn? 'login' : 'logout'}`
  }
}
