import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  imports: [NgIf,NgFor],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  show=true;
  login=false;
  students=["Siddhesh","PC","Farhan","Atharva","Mahesh"];
  studData=[
    {
      name:"Siddhesh",
      age:"21"
    },
    {
      name:"PC",
      age:"22"
    },
    {
      name:"Farhan",
      age:"23"
    }
  ]
}
