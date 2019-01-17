import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hostBindings]'
})
export class HostBindingsDirective {

  @Input() hostBindings: any;

  @HostBinding('style.color')
  get textColor() {
    return this.hostBindings.color;
  }
  
  @HostBinding('style.fontFamily')
  get textFont() {
    return this.hostBindings.fontFamily;
  }
  
  @HostBinding('style.fontStyle')
  fontStyle: string;
  
  @HostListener('mouseenter')
  mouseEntered(){
    this.fontStyle = 'italic';
  }
  
  @HostListener('mouseleave')
  mouseLeft(){
    this.fontStyle = 'normal';
  }
}
