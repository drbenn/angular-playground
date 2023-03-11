import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-prop-bind-child',
  templateUrl: './prop-bind-child.component.html',
  styleUrls: ['./prop-bind-child.component.scss']
})
export class PropBindChildComponent {
  // Input from parent
  @Input() parentString: string = '';
  @Input() parentVar: any = '';
  @Input() parentObj: {} = {};


  // Output to parent
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
