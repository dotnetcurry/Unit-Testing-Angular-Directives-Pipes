import { Directive, OnInit, Input, ElementRef, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myAttr]'
})
export class MyAttrDirective implements OnInit, OnChanges {
  @Input() myAttr: any;
  
  constructor(private el: ElementRef,
    private renderer: Renderer2){ }
  
  ngOnInit() {
    this.applyStyle();
  }

  ngOnChanges() {
    this.applyStyle();
  }
  
  applyStyle() {
    this.renderer.setStyle(this.el.nativeElement, "color", this.myAttr.color);
    this.renderer.setStyle(this.el.nativeElement, "fontFamily", this.myAttr.fontFamily);
  }
}
