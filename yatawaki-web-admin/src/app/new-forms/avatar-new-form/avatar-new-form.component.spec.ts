import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarNewFormComponent } from './avatar-new-form.component';

describe('AvatarNewFormComponent', () => {
  let component: AvatarNewFormComponent;
  let fixture: ComponentFixture<AvatarNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
