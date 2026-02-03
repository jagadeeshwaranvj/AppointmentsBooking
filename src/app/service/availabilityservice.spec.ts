import { TestBed } from '@angular/core/testing';

import { Availabilityservice } from './availabilityservice';

describe('Availabilityservice', () => {
  let service: Availabilityservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Availabilityservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
