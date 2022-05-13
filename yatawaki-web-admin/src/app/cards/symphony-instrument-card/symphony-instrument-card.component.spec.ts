import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyInstrumentCardComponent } from './symphony-instrument-card.component';

describe('SymphonyInstrumentCardComponent', () => {
  let component: SymphonyInstrumentCardComponent;
  let fixture: ComponentFixture<SymphonyInstrumentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyInstrumentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyInstrumentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
