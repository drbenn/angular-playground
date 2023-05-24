import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMessageMagic]',
})
export class MessageMagicDirective {
  message: any;
  
  constructor(private elementRef: ElementRef) {}
  @Input() theMessage: string;

  ngOnInit() {
    this.elementRef.nativeElement.textContent = this.theMessage;
  }
}
