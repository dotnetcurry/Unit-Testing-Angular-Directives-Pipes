import { Component, DebugElement } from '@angular/core';
import { ApplyStyleDirective } from './app-style.directive';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: `<div applyStyle>Some random text</div>`
})
class TestComponent { }

describe('AppStyleDirective tests', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directiveElement: DebugElement;

  beforeEach(async(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        ApplyStyleDirective, TestComponent
      ],
    }).createComponent(TestComponent);
    fixture.detectChanges();

    directiveElement = fixture.debugElement.query(By.directive(ApplyStyleDirective));
  }));
  
  it('should have applied the CSS class and title', () => {
    expect(directiveElement.classes['sample-text']).toEqual(true);
    expect(directiveElement.properties.title).not.toEqual('');
  });
});
