import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginService:LoginService) { }
  isAuth():boolean{
    // return !!localStorage.getItem('token') //if localStorage has token will return boolean value
    return this.loginService.isLogin();
  }
  appAuth(username:string,password:number):boolean{
    if(username&&password){
      return true
    }else{
      return false
    }
  }
}
