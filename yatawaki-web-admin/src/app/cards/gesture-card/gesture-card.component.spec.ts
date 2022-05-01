import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestureCardComponent } from './gesture-card.component';

describe('GestureCardComponent', () => {
  let component: GestureCardComponent;
  let fixture: ComponentFixture<GestureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestureCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
