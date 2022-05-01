import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestureNewFormComponent } from './gesture-new-form.component';

describe('GestureNewFormComponent', () => {
  let component: GestureNewFormComponent;
  let fixture: ComponentFixture<GestureNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestureNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestureNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
