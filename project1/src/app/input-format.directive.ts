import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur()
  {
    if(this.format == 'lowercase')
        this.el.nativeElement.value = this.el.nativeElement.value.toLowerCase();
    else
      this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
  }

}
