import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankNewFormComponent } from './rank-new-form.component';

describe('RankNewFormComponent', () => {
  let component: RankNewFormComponent;
  let fixture: ComponentFixture<RankNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
