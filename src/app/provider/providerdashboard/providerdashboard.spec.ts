import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Providerdashboard } from './providerdashboard';

describe('Providerdashboard', () => {
  let component: Providerdashboard;
  let fixture: ComponentFixture<Providerdashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Providerdashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Providerdashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
