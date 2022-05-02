import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankChangeFormComponent } from './rank-change-form.component';

describe('RankChangeFormComponent', () => {
  let component: RankChangeFormComponent;
  let fixture: ComponentFixture<RankChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
