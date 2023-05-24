import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BblueButtonComponent } from './bblue-button.component';

describe('BblueButtonComponent', () => {
  let component: BblueButtonComponent;
  let fixture: ComponentFixture<BblueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BblueButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BblueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
