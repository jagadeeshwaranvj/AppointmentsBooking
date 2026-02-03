import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Provideravailability } from './provideravailability';

describe('Provideravailability', () => {
  let component: Provideravailability;
  let fixture: ComponentFixture<Provideravailability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Provideravailability]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Provideravailability);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
