import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  clickMe(){
    console.log('This is ROHITs Yard Now ');
    this.func();
    
  }
  func(){
    console.log("Hello Siddhesh I am on the console!!")
  }
}
