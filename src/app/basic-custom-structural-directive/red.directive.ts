import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedDirective]'
})
export class RedDirective {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.color = 'red';
    this.elementRef.nativeElement.style.backgroundColor = 'pink';
  }

}
