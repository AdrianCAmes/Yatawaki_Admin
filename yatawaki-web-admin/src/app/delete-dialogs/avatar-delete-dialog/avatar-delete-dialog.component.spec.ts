import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDeleteDialogComponent } from './avatar-delete-dialog.component';

describe('AvatarDeleteDialogComponent', () => {
  let component: AvatarDeleteDialogComponent;
  let fixture: ComponentFixture<AvatarDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
