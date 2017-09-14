import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.open') open = false;
  // @HostBinding('style.backgroundColor') bgColor = '#337ab7';
  constructor() { }

  @HostListener('click') toggleOpen() {
    this.open = !this.open;
    // this.bgColor = 'black';
  }
}
