import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactv1Component } from './contactv1.component';

describe('Contactv1Component', () => {
  let component: Contactv1Component;
  let fixture: ComponentFixture<Contactv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contactv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contactv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
