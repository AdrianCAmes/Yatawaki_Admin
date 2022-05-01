import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentChangeFormComponent } from './instrument-change-form.component';

describe('InstrumentChangeFormComponent', () => {
  let component: InstrumentChangeFormComponent;
  let fixture: ComponentFixture<InstrumentChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
