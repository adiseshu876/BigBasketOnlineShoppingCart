import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerForgetpasswordComponent } from './seller-forgetpassword.component';

describe('SellerForgetpasswordComponent', () => {
  let component: SellerForgetpasswordComponent;
  let fixture: ComponentFixture<SellerForgetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerForgetpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
