import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatisticCardComponent } from './user-statistic-card.component';

describe('UserStatisticCardComponent', () => {
  let component: UserStatisticCardComponent;
  let fixture: ComponentFixture<UserStatisticCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatisticCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatisticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
