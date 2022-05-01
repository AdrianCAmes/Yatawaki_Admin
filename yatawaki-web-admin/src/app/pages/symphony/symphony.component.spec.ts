import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonyComponent } from './symphony.component';

describe('SymphonyComponent', () => {
  let component: SymphonyComponent;
  let fixture: ComponentFixture<SymphonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymphonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
