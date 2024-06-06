import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
  title!: string;
  isLoggedIn:boolean
  @Output() submitData:EventEmitter<User>
  constructor(){
    this.title='hello'
    this.isLoggedIn=false
    this.submitData=new EventEmitter<User>() //instance from the output
  }
  ngOnInit(): void {}

  login(email:string,password:string):void{
    this.isLoggedIn=!this.isLoggedIn
    this.submitData.emit({email,password}) //after clicking the submit button(login) we emit / send the data
  }
  get loginState():string{
    return `User is ${this.isLoggedIn? 'login' : 'logout'}`
  }
}
