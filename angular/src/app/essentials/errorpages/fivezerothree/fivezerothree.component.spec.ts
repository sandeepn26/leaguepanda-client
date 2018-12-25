import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivezerothreeComponent } from './fivezerothree.component';

describe('FivezerothreeComponent', () => {
  let component: FivezerothreeComponent;
  let fixture: ComponentFixture<FivezerothreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivezerothreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivezerothreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
