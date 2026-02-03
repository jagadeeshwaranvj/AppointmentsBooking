import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminreport } from './adminreport';

describe('Adminreport', () => {
  let component: Adminreport;
  let fixture: ComponentFixture<Adminreport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminreport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminreport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
