import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockableCardComponent } from './unlockable-card.component';

describe('UnlockableCardComponent', () => {
  let component: UnlockableCardComponent;
  let fixture: ComponentFixture<UnlockableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
