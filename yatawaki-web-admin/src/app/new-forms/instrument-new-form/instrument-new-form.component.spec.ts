import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentNewFormComponent } from './instrument-new-form.component';

describe('InstrumentNewFormComponent', () => {
  let component: InstrumentNewFormComponent;
  let fixture: ComponentFixture<InstrumentNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
