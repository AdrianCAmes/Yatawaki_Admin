import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyGestureComponent } from './symphony-gesture.component';

describe('SymphonyGestureComponent', () => {
  let component: SymphonyGestureComponent;
  let fixture: ComponentFixture<SymphonyGestureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyGestureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyGestureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
