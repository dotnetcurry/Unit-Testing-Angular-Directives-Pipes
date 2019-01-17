import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DefaultvaluePipe } from './defaultvalue.pipe';

describe('DefaultvaluePipe', () => {
  let pipe: DefaultvaluePipe;

  beforeEach(() => {
    pipe = new DefaultvaluePipe();
  });

  it('should return default value for number', () => {
    expect(pipe.transform(null, 'number')).toEqual(0);
  });

  it('should not return default value for number', () => {
    expect(pipe.transform(10, 'number')).toEqual(10);
  });

  it('should return default value for object', () => {
    let ret = pipe.transform(undefined, 'object');
    expect(ret).toEqual({});
  });

  it('should not return default value for object', () => {
    expect(pipe.transform({ val: 10 }, 'object')).toEqual({ val: 10 });
  });

  it('should return default value for string', () => {
    expect(pipe.transform('', 'string')).toEqual('-');
  });

  it('should return default value for string', () => {
    expect(pipe.transform('sample', 'string')).toEqual('sample');
  });

  it('should return default value for boolean', () => {
    expect(pipe.transform(null, 'boolean')).toEqual(false);
  });

  it('should not return default value for boolean', () => {
    expect(pipe.transform(true, 'boolean')).toEqual(true);
  });
});

@Component({
  selector: 'test',
  template: `<div>{{employee | defaultvalue:'object' | json}}</div>`
})
class TestComponent {
  employee: any;
}

describe('DefaultvaluePipe from Component', () => {
  let fixture: ComponentFixture<TestComponent>;
  let divElement: DebugElement;

  beforeEach(async(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        DefaultvaluePipe, TestComponent
      ],
    }).createComponent(TestComponent);
    fixture.detectChanges();

    divElement = fixture.debugElement.query(By.css('div'));
  }));

  it('should have the default value set', () => {
    expect(divElement.nativeElement.textContent).toEqual('{}');
  });

  it('should not show default value when the object has a value', () => {
    fixture.componentInstance.employee = { name: 'Ravi' };
    fixture.detectChanges();

    expect(divElement.nativeElement.textContent).not.toEqual('{}');
    expect(divElement.nativeElement.textContent).not.toEqual(JSON.stringify(fixture.componentInstance.employee));
  });
});
