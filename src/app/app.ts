import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Counter } from './counter/counter';
import { Events } from './events/events';
import { InputField } from './input-field/input-field';
import { IfElse } from './if-else/if-else';
import { Switch } from './switch/switch';
import { ForLoop } from './for-loop/for-loop';
import { Signals } from './signals/signals';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { TodoApp } from './todo-app/todo-app';


@Component({
  selector: 'app-root',
  imports: [Login,Counter,Events,InputField,IfElse,Switch,ForLoop,Signals,TwoWayBinding,TodoApp],
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
