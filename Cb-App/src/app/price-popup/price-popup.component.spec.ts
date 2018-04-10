import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePopupComponent } from './price-popup.component';

describe('PricePopupComponent', () => {
  let component: PricePopupComponent;
  let fixture: ComponentFixture<PricePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
