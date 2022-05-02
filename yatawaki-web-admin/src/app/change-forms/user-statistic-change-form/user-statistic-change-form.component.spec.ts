import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatisticChangeFormComponent } from './user-statistic-change-form.component';

describe('UserStatisticChangeFormComponent', () => {
  let component: UserStatisticChangeFormComponent;
  let fixture: ComponentFixture<UserStatisticChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatisticChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatisticChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
