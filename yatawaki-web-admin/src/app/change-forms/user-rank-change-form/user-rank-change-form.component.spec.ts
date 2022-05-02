import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRankChangeFormComponent } from './user-rank-change-form.component';

describe('UserRankChangeFormComponent', () => {
  let component: UserRankChangeFormComponent;
  let fixture: ComponentFixture<UserRankChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRankChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRankChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
