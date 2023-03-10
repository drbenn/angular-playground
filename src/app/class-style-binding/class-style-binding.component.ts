import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.scss']
})
export class ClassStyleBindingComponent {
  onSale: boolean = true;
  classExpression: string = 'big-font green-bg big-font-weight';
  arrayExpression: string[] = ['dog', 'bone'];
  objectExpression: {} = {"cemetary-bg": true, "frail-size": true, "white-text": true, "booyah-padding":true }


  selectedBgColor: string = 'salmon';
  styleExpression: string = 'width: 80%; height: 100px; background-Color: cornflowerblue; border: 2px dashed black; font-size: 1.5rem; color: grey'

}
