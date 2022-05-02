import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRankNewFormComponent } from './user-rank-new-form.component';

describe('UserRankNewFormComponent', () => {
  let component: UserRankNewFormComponent;
  let fixture: ComponentFixture<UserRankNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRankNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRankNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
