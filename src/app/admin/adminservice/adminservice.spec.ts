import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminservice } from './adminservice';

describe('Adminservice', () => {
  let component: Adminservice;
  let fixture: ComponentFixture<Adminservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
