import { Component } from '@angular/core';

@Component({
  selector: 'dynamic_styling',
  imports: [],
  templateUrl: './dynamic-styling.html',
  styleUrl: './dynamic-styling.css'
})
export class DynamicStyling {
  zoom=true;
  zoomin="30px"
  zoomout="80px"
}
