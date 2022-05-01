import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestureChangeFormComponent } from './gesture-change-form.component';

describe('GestureChangeFormComponent', () => {
  let component: GestureChangeFormComponent;
  let fixture: ComponentFixture<GestureChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestureChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestureChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
