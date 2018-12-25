import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightfooterComponent } from './lightfooter.component';

describe('LightfooterComponent', () => {
  let component: LightfooterComponent;
  let fixture: ComponentFixture<LightfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
