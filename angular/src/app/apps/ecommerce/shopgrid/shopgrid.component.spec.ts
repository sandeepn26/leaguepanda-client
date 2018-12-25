import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopgridComponent } from './shopgrid.component';

describe('ShopgridComponent', () => {
  let component: ShopgridComponent;
  let fixture: ComponentFixture<ShopgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
