import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.scss']
})
export class NgmodelComponent {
  name: string = '';
  storedName: string = '';

  setValue() {
    this.name = 'Shaq';
  }

  clearValue() {
    this.name = '';
  }

  storeValue() {
    this.storedName = this.name;
  }
}
