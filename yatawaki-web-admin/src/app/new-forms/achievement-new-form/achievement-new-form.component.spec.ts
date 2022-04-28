import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementNewFormComponent } from './achievement-new-form.component';

describe('AchievementNewFormComponent', () => {
  let component: AchievementNewFormComponent;
  let fixture: ComponentFixture<AchievementNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
