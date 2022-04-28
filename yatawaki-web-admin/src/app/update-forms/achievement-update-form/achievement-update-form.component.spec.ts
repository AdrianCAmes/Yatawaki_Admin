import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementUpdateFormComponent } from './achievement-update-form.component';

describe('AchievementUpdateFormComponent', () => {
  let component: AchievementUpdateFormComponent;
  let fixture: ComponentFixture<AchievementUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
