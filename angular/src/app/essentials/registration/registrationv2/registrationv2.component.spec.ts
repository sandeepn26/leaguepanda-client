import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrationv2Component } from './registrationv2.component';

describe('Registrationv2Component', () => {
  let component: Registrationv2Component;
  let fixture: ComponentFixture<Registrationv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrationv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrationv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
