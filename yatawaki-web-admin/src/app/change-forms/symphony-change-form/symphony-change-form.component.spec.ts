import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyChangeFormComponent } from './symphony-change-form.component';

describe('SymphonyChangeFormComponent', () => {
  let component: SymphonyChangeFormComponent;
  let fixture: ComponentFixture<SymphonyChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
