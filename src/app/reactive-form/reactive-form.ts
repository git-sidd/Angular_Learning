import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
  // name=new FormControl('Siddhesh')
  // password=new FormControl('123456')

  // getDetails(){
  //     console.log(this.name.value,this.password.value);
  // }

  //FormGrouping
  FormData=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
  })
  onSubmit(){
    console.log(this.FormData.value)
  }

}
