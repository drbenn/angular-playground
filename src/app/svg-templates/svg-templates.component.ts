import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-templates',
  // templateUrl: './svg-templates.component.html',
  templateUrl: './svg-templates.component.svg',
  styleUrls: ['./svg-templates.component.scss']
})
export class SvgTemplatesComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
