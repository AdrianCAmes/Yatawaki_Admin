import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRankCardComponent } from './user-rank-card.component';

describe('UserRankCardComponent', () => {
  let component: UserRankCardComponent;
  let fixture: ComponentFixture<UserRankCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRankCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRankCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
