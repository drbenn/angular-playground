import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent {
  word: string;
  number: number;
  color: any;
  password: any;

  seeValues() {
    console.log(
      'word :', this.word,
      'number: ', this.number,
      'color: ', this.color,
      'password: ', this.password
    );
  }

}
