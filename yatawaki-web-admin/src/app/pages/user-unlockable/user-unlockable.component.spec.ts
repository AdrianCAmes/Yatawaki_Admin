import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUnlockableComponent } from './user-unlockable.component';

describe('UserUnlockableComponent', () => {
  let component: UserUnlockableComponent;
  let fixture: ComponentFixture<UserUnlockableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUnlockableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUnlockableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
