import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Child } from '../child/child';

@Component({
  selector: 'app-home',
  imports: [RouterLink,Child],
  // imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

    // constructor(private router:Router){}

    // goToProfile(){
    //   this.router.navigate(['/profile'],{queryParams:{name:'Siddhesh Patole'}});
    // }

    users=[
    {
      id:'1',
      name:"Siddhesh",
      age:21
    },
    {
      id:'2',
      name:"Sakshi",
      age:23
    },
    {
      id:'3',
      name:"Pornima",
      age:42
    },
    {
      id:'4',
      name:"Ramesh",
      age:46
    }
  ]
}
