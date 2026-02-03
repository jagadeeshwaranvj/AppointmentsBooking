import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Providerappointments } from './providerappointments';

describe('Providerappointments', () => {
  let component: Providerappointments;
  let fixture: ComponentFixture<Providerappointments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Providerappointments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Providerappointments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
