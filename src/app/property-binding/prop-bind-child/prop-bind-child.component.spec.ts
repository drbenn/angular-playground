import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropBindChildComponent } from './prop-bind-child.component';

describe('PropBindChildComponent', () => {
  let component: PropBindChildComponent;
  let fixture: ComponentFixture<PropBindChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropBindChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropBindChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
