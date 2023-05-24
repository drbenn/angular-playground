import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUtilitiesComponent } from './random-utilities.component';

describe('RandomUtilitiesComponent', () => {
  let component: RandomUtilitiesComponent;
  let fixture: ComponentFixture<RandomUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUtilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
