import { Component } from '@angular/core';

@Component({
  selector: 'input-field',
  imports: [],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css'
})
export class InputField {
  name="";
  
  getEmail(val:string){
    this.name=val;
  }
  
}
