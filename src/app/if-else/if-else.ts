import { Component } from '@angular/core';

@Component({
  selector: 'ifelse',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css'
})
export class IfElse {
  display=true;
  hide(){
    this.display=false
  }
  show(){
    this.display=true
  }
  toggle(){
    this.display=!this.display
  }
}
