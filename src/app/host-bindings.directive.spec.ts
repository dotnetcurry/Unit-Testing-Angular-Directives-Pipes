import { HostBindingsDirective } from './host-bindings.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `<div [hostBindings]="styles">Some sample text</div>`
})
class TestComponent {
  styles = {
    color: "green",
    fontFamily: "Verdana"
  };
}

describe('HostBindingsDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directiveElement: DebugElement;

  beforeEach(async(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        HostBindingsDirective, TestComponent
      ],
    }).createComponent(TestComponent);
    fixture.detectChanges();

    directiveElement = fixture.debugElement.query(By.directive(HostBindingsDirective));
  }));

  it('should apply styles to the element', () => {
    expect(directiveElement.styles.color).toEqual('green');
    expect(directiveElement.styles.fontFamily).toEqual('Verdana');
  });

  it('should modify font style when mouse enters the element', () => {
    directiveElement.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(directiveElement.styles.fontStyle).toEqual('italic');
  });

  it('should restore font style to normal when mouse leaves', () => {
    directiveElement.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(directiveElement.styles.fontStyle).toEqual('normal');
  });
});
