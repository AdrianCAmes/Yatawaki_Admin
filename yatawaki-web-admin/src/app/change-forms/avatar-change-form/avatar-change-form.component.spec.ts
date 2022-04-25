import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarChangeFormComponent } from './avatar-change-form.component';

describe('AvatarChangeFormComponent', () => {
  let component: AvatarChangeFormComponent;
  let fixture: ComponentFixture<AvatarChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
