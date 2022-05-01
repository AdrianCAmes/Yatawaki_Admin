import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyNewFormComponent } from './symphony-new-form.component';

describe('SymphonyNewFormComponent', () => {
  let component: SymphonyNewFormComponent;
  let fixture: ComponentFixture<SymphonyNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
