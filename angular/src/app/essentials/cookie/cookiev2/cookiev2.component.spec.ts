import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cookiev2Component } from './cookiev2.component';

describe('Cookiev2Component', () => {
  let component: Cookiev2Component;
  let fixture: ComponentFixture<Cookiev2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cookiev2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cookiev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
