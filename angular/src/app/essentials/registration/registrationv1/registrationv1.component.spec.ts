import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrationv1Component } from './registrationv1.component';

describe('Registrationv1Component', () => {
  let component: Registrationv1Component;
  let fixture: ComponentFixture<Registrationv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrationv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrationv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
