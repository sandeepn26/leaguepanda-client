import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FouroffourComponent } from './fouroffour.component';

describe('FouroffourComponent', () => {
  let component: FouroffourComponent;
  let fixture: ComponentFixture<FouroffourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FouroffourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FouroffourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
