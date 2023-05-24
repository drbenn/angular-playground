import { TestBed } from '@angular/core/testing';

import { RandomUtilitiesService } from './random-utilities.service';

describe('RandomUtilitiesService', () => {
  let service: RandomUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
