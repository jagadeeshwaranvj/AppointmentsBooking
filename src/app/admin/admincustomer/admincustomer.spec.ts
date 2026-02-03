import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admincustomer } from './admincustomer';

describe('Admincustomer', () => {
  let component: Admincustomer;
  let fixture: ComponentFixture<Admincustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admincustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admincustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
