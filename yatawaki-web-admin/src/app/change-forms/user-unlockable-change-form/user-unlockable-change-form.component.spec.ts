import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUnlockableChangeFormComponent } from './user-unlockable-change-form.component';

describe('UserUnlockableChangeFormComponent', () => {
  let component: UserUnlockableChangeFormComponent;
  let fixture: ComponentFixture<UserUnlockableChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUnlockableChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUnlockableChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
