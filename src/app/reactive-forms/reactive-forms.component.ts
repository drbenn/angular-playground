import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  simple = new FormControl('yup')

  aForm = new FormGroup({
    saying: new FormControl('uhuh', Validators.required),
    digit: new FormControl(null), 
    colour: new FormControl('')
  })

  onFormSubmit() {
    console.log('accepts form data');
    console.log(this.aForm);
    console.log(this.aForm.value);
  }

}