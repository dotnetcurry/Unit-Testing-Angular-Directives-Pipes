import { MyAttrDirective } from './my-attr.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `<div [myAttr]="styles">Some random text</div>`
})
class TestComponent { 
  styles = {color: "white", fontFamily: "Verdana"};
}

describe('MyAttrDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directiveElement: DebugElement;

  beforeEach(async(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        MyAttrDirective, TestComponent
      ],
    }).createComponent(TestComponent);
    fixture.detectChanges();

    directiveElement = fixture.debugElement.query(By.directive(MyAttrDirective));
  }));

  it('should create an instance', () => {
    expect(directiveElement.styles.color).toBe('white');
    expect(directiveElement.styles.fontFamily).toBe('Verdana');
  });

  it('should change style', () => {
    fixture.componentInstance.styles = {color: 'green', fontFamily: 'Aerial'};
    fixture.detectChanges();

    expect(directiveElement.styles.color).toBe('green');
    expect(directiveElement.styles.fontFamily).toBe('Aerial');
  });
});
