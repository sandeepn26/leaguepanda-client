import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutsidebarComponent } from './withoutsidebar.component';

describe('WithoutsidebarComponent', () => {
  let component: WithoutsidebarComponent;
  let fixture: ComponentFixture<WithoutsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
