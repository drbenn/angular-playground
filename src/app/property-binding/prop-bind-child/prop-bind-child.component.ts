import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prop-bind-child',
  templateUrl: './prop-bind-child.component.html',
  styleUrls: ['./prop-bind-child.component.scss']
})
export class PropBindChildComponent {
  @Input() parentString: string = '';
  @Input() parentVar: any = '';
  @Input() parentObj: {} = {};
  

}
