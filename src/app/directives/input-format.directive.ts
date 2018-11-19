import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }

  @Input('appInputFormat') format: string;

  @HostListener('focus') onfocus() {
    console.log('onFocus');
  }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase') { this.el.nativeElement.value = value.toLowerCase(); }
    if (this.format == 'uppercase') { this.el.nativeElement.value = value.toUpperCase(); }
  }
}
