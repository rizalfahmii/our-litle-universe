import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opening } from './opening';

describe('Opening', () => {
  let component: Opening;
  let fixture: ComponentFixture<Opening>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opening],
    }).compileComponents();

    fixture = TestBed.createComponent(Opening);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
