import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyGestureCardComponent } from './symphony-gesture-card.component';

describe('SymphonyGestureCardComponent', () => {
  let component: SymphonyGestureCardComponent;
  let fixture: ComponentFixture<SymphonyGestureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyGestureCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyGestureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
