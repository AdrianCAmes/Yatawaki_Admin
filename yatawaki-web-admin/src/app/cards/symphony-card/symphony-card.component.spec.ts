import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyCardComponent } from './symphony-card.component';

describe('SymphonyCardComponent', () => {
  let component: SymphonyCardComponent;
  let fixture: ComponentFixture<SymphonyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
