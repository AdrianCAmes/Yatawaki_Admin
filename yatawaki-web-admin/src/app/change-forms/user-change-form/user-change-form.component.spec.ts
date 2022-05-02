import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChangeFormComponent } from './user-change-form.component';

describe('UserChangeFormComponent', () => {
  let component: UserChangeFormComponent;
  let fixture: ComponentFixture<UserChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
