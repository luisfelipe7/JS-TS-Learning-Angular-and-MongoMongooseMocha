import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationCalculatorComponent } from './duration-calculator.component';

describe('DurationCalculatorComponent', () => {
  let component: DurationCalculatorComponent;
  let fixture: ComponentFixture<DurationCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
