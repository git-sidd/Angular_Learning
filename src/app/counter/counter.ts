import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
    counter=0;
    dec(){
      if(this.counter>1){
        
        this.counter--;
        console.log("Dec")
      }
     
    }
    reset(){
      this.counter=0;
      console.log("res")
    }
    inc(){
      this.counter++;
      console.log("inc")
    }
}
