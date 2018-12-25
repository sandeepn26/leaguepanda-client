import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebarv2Component } from './sidebarv2.component';

describe('Sidebarv2Component', () => {
  let component: Sidebarv2Component;
  let fixture: ComponentFixture<Sidebarv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sidebarv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sidebarv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
