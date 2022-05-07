import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyGestureNewFormComponent } from './symphony-gesture-new-form.component';

describe('SymphonyGestureNewFormComponent', () => {
  let component: SymphonyGestureNewFormComponent;
  let fixture: ComponentFixture<SymphonyGestureNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyGestureNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyGestureNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
