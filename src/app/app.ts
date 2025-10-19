import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Counter } from './counter/counter';


@Component({
  selector: 'app-root',
  imports: [Login,Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tut');
  name="Siddhesh";
  post="Hitman"
  func() {
    let a=10;
    return `Hello you age is ${this.name   +a}`;                          
  }
  sum(a:number,b:number){
    console.log(a+b);
  }
  
}
