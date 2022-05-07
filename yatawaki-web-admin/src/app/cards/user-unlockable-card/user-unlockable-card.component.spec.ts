import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUnlockableCardComponent } from './user-unlockable-card.component';

describe('UserUnlockableCardComponent', () => {
  let component: UserUnlockableCardComponent;
  let fixture: ComponentFixture<UserUnlockableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUnlockableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUnlockableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
