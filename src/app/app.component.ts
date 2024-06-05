import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'pm-root',
  standalone: true,
  imports: [RouterOutlet],
  template: 'sad',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='title'
  constructor(private authService:AuthService){
  }
  hello(){
    return 'Hello World'
  }
  canLogin(username:string,password:number):boolean{
    return this.authService.appAuth(username,password)
  }
}
