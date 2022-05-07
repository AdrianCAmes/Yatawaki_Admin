import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyGestureChangeFormComponent } from './symphony-gesture-change-form.component';

describe('SymphonyGestureChangeFormComponent', () => {
  let component: SymphonyGestureChangeFormComponent;
  let fixture: ComponentFixture<SymphonyGestureChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyGestureChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyGestureChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
