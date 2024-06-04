import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pm-root',
  standalone: true,
  imports: [RouterOutlet],
  template: 'sad',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
  }
  hello(){
    return 'Hello'
  }
}
