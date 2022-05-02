import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertNewFormComponent } from './concert-new-form.component';

describe('ConcertNewFormComponent', () => {
  let component: ConcertNewFormComponent;
  let fixture: ComponentFixture<ConcertNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
