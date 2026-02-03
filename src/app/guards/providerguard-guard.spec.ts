import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { providerguardGuard } from './providerguard-guard';

describe('providerguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => providerguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
