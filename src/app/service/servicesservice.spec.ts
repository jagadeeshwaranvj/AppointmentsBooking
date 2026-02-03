import { TestBed } from '@angular/core/testing';

import { Servicesservice } from './servicesservice';

describe('Servicesservice', () => {
  let service: Servicesservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicesservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
