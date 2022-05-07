import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyInstrumentNewFormComponent } from './symphony-instrument-new-form.component';

describe('SymphonyInstrumentNewFormComponent', () => {
  let component: SymphonyInstrumentNewFormComponent;
  let fixture: ComponentFixture<SymphonyInstrumentNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyInstrumentNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyInstrumentNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
