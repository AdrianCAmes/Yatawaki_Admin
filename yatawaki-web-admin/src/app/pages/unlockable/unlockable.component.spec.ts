import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockableComponent } from './unlockable.component';

describe('UnlockableComponent', () => {
  let component: UnlockableComponent;
  let fixture: ComponentFixture<UnlockableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
