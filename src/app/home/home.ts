import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  // imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

    // constructor(private router:Router){}

    // goToProfile(){
    //   this.router.navigate(['/profile'],{queryParams:{name:'Siddhesh Patole'}});
    // }
}
