import { TestBed } from '@angular/core/testing';

import { Adminproviderservice } from './adminproviderservice';

describe('Adminproviderservice', () => {
  let service: Adminproviderservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adminproviderservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
