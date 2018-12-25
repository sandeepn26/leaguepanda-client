import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithtopbarComponent } from './withtopbar.component';

describe('WithtopbarComponent', () => {
  let component: WithtopbarComponent;
  let fixture: ComponentFixture<WithtopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithtopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithtopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
