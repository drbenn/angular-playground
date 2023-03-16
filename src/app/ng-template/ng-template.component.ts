import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent {
  ngIfexample:boolean = true;

  orders: any[] = [
    { id: 10 },
    { id: 20},
    { id: 30 }
  ]

  day: number = 2;

  dayAgain: number = 5;
}
