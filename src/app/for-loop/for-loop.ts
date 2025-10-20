import { Component } from '@angular/core';

@Component({
  selector: 'forloop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css'
})
export class ForLoop {
    students=[
      {name:'siddhesh',age:'21',email:'sidd@gmail.com'},
      {name:'Sakshi',age:'23',email:'sak@gmail.com'},
      {name:'pornima',age:'45',email:'pornima@gmail.com'},
    ]

    getname(val:string){
      console.log(val)
    }
}
