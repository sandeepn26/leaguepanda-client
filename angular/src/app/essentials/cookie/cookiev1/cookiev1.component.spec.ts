import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cookiev1Component } from './cookiev1.component';

describe('Cookiev1Component', () => {
  let component: Cookiev1Component;
  let fixture: ComponentFixture<Cookiev1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cookiev1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cookiev1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
