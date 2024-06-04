import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuth():boolean{
    return !!localStorage.getItem('token') //if localStorage has token will return boolean value
  }

}
