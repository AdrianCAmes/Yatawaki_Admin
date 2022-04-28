import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerChangeFormComponent } from './composer-change-form.component';

describe('ComposerChangeFormComponent', () => {
  let component: ComposerChangeFormComponent;
  let fixture: ComponentFixture<ComposerChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
