import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererTwoComponent } from './renderer-two.component';

describe('RendererTwoComponent', () => {
  let component: RendererTwoComponent;
  let fixture: ComponentFixture<RendererTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendererTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendererTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
