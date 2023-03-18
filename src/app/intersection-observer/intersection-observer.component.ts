import { Component } from '@angular/core';

@Component({
  selector: 'app-intersection-observer',
  templateUrl: './intersection-observer.component.html',
  styleUrls: ['./intersection-observer.component.scss']
})
export class IntersectionObserverComponent {
  items: number[] = [1,2,3,4,5]

  isIntersecting (status: boolean, index: number) {
    console.log('Element #' + index + ' is intersecting ' + status)
  }

}
