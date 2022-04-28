import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerNewFormComponent } from './composer-new-form.component';

describe('ComposerNewFormComponent', () => {
  let component: ComposerNewFormComponent;
  let fixture: ComponentFixture<ComposerNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
