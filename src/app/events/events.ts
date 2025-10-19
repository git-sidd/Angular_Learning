import { Component } from '@angular/core';

@Component({
  selector: 'events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  HandleEvent(event:Event){
    console.log(event.type)
   
  }
}
