import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.scss']
})
export class TemplateVariablesComponent {
  callPhone(number: string | number) {
    alert(`number ${number} was entered into input and passed as template variable for use in button calling this function`)
  }
}
