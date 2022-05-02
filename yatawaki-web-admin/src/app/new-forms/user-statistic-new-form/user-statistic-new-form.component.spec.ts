import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatisticNewFormComponent } from './user-statistic-new-form.component';

describe('UserStatisticNewFormComponent', () => {
  let component: UserStatisticNewFormComponent;
  let fixture: ComponentFixture<UserStatisticNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatisticNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatisticNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
