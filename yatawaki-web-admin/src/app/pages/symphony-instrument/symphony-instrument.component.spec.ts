import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyInstrumentComponent } from './symphony-instrument.component';

describe('SymphonyInstrumentComponent', () => {
  let component: SymphonyInstrumentComponent;
  let fixture: ComponentFixture<SymphonyInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyInstrumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
