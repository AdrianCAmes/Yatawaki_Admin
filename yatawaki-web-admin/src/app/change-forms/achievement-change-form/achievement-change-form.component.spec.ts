import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementChangeFormComponent } from './achievement-change-form.component';

describe('AchievementChangeFormComponent', () => {
  let component: AchievementChangeFormComponent;
  let fixture: ComponentFixture<AchievementChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
