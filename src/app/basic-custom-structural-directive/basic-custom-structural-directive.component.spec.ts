import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCustomStructuralDirectiveComponent } from './basic-custom-structural-directive.component';

describe('BasicCustomStructuralDirectiveComponent', () => {
  let component: BasicCustomStructuralDirectiveComponent;
  let fixture: ComponentFixture<BasicCustomStructuralDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCustomStructuralDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCustomStructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
