import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkfooterComponent } from './darkfooter.component';

describe('DarkfooterComponent', () => {
  let component: DarkfooterComponent;
  let fixture: ComponentFixture<DarkfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
