import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  // Input to child
  varToChild: number = 108;
  objToChild: {} = { name:"Greg", weight:186 }


  // Receiving output from child and pushing to list for display
  items = ['item1', 'item2', 'item3', 'item4'];

  addItemFromChild(newItem: string) {
    this.items.push(newItem);
    console.log(this.items);

  }

}
