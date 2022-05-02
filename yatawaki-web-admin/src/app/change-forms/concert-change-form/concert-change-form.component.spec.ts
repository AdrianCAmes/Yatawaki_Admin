import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertChangeFormComponent } from './concert-change-form.component';

describe('ConcertChangeFormComponent', () => {
  let component: ConcertChangeFormComponent;
  let fixture: ComponentFixture<ConcertChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
