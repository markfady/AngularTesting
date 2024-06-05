import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Post{
  userId:number;
  id:number;
  title:string;
  body:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private loginService:LoginService, private http:HttpClient) { }
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
  //till video 7 comment this line to run test case of app component and other auth service
  getPost(postId:number):Observable<Post>{
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
  }
}
