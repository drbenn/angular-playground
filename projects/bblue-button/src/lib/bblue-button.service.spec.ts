import { TestBed } from '@angular/core/testing';

import { BblueButtonService } from './bblue-button.service';

describe('BblueButtonService', () => {
  let service: BblueButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BblueButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
