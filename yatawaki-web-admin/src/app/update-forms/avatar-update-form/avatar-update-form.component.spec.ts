import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarUpdateFormComponent } from './avatar-update-form.component';

describe('AvatarUpdateFormComponent', () => {
  let component: AvatarUpdateFormComponent;
  let fixture: ComponentFixture<AvatarUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
