import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  // count=signal(10); //signal declaration
  // x=20  //property declaration

  // changeProp(){
  //   this.x=this.x+1
  // }
  // constructor(){
  //   effect(()=>{
  //     console.log(this.count())
  //     console.log(this.x)
  //   })
  // }

  // changeSignal(){
  //   this.count.set(20)
  // }


  //Data type change for value;
  // data=signal<number| string>(10);

  // updateSignal(){
  //   this.data.set('Siddhesh')
  // }

  //Data type chnage for Signal 

  // data:WritableSignal<number | string>=signal(10);

  // updateSignal(){
  //   this.data.set('Siddhesh');
  // }





  //Computed Signal

  // count:Signal<number>=computed(()=>500);
  x=signal(10);
  y=signal(20);
  z=computed(()=>this.x()+this.y()); 

  showValue(){
    console.log(this.z());
    this.x.set(100);
    console.log(this.z())
  }

}

