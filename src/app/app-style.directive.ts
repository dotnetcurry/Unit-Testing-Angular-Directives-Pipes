import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[applyStyle]'
})
export class ApplyStyleDirective {
  constructor(private el: ElementRef,
    private renderer: Renderer2) {
    this.renderer.addClass(el.nativeElement, 'sample-text');
    this.renderer.setProperty(el.nativeElement, 'title', 'This is applied from the directive!');
  }
}