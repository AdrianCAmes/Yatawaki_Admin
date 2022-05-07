import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyInstrumentChangeFormComponent } from './symphony-instrument-change-form.component';

describe('SymphonyInstrumentChangeFormComponent', () => {
  let component: SymphonyInstrumentChangeFormComponent;
  let fixture: ComponentFixture<SymphonyInstrumentChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyInstrumentChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyInstrumentChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
