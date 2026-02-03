import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminprovider } from './adminprovider';

describe('Adminprovider', () => {
  let component: Adminprovider;
  let fixture: ComponentFixture<Adminprovider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminprovider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminprovider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
