import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerUpdateFormComponent } from './composer-update-form.component';

describe('ComposerUpdateFormComponent', () => {
  let component: ComposerUpdateFormComponent;
  let fixture: ComponentFixture<ComposerUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
