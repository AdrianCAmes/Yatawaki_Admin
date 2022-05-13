import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUnlockableNewFormComponent } from './user-unlockable-new-form.component';

describe('UserUnlockableNewFormComponent', () => {
  let component: UserUnlockableNewFormComponent;
  let fixture: ComponentFixture<UserUnlockableNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUnlockableNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUnlockableNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
