import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopnosidebarComponent } from './shopnosidebar.component';

describe('ShopnosidebarComponent', () => {
  let component: ShopnosidebarComponent;
  let fixture: ComponentFixture<ShopnosidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopnosidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopnosidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
