import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css'
})
export class TwoWayBinding {
  name="";
}
