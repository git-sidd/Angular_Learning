import { Component, Input } from '@angular/core';


@Component({
  selector: 'child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() name:string='';
  
}
