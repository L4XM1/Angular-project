import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroShopComponent } from './intro-shop.component';

describe('IntroComponent', () => {
  let component: IntroShopComponent;
  let fixture: ComponentFixture<IntroShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
