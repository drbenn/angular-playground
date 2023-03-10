import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  clickArray: string[] = [];
  clickNumber: number = 0;

  onButtonClick(event: MouseEvent) {
    console.log(event);
    
    this.clickNumber += 1
    this.clickArray.push(`Button clicked ` + String(this.clickNumber) + ` times`)
  }
  onKeyUp(event: KeyboardEvent) {
    console.log(event);  
    alert('keyup on ' + event.key)
  }

  onScroll() {
    console.log('scrolling');
    
  }

  onFocus(event: any) {
    console.log(event);
    alert('focus on input' )
  }

  onBlur(event: any) {
    console.log(event);
    alert('focus removed from input(a blur event)')
  }
}
