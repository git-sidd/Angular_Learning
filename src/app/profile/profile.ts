import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  constructor(private route:ActivatedRoute){}
  username:string|null=""
  ngOnInit(){

    // Passing Data Using RouterLink
    // let name=this.route.snapshot.paramMap.get('name')
    // this.username=name;
    // console.log(name)

    //Passing Data Using Button
    // this.route.queryParams.subscribe(params=>{
    //   this.username=params['name'];
    // })
    // console.log(this.username)

    //Passing Data with Router(route.ts file)
    this.route.data.subscribe(data=>{
      this.username=data['name'];
    })
  }
  
}
