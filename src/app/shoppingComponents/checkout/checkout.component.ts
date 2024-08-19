import { Component } from '@angular/core';
import { ProductListDetailsType } from '../product-details';
import { Router } from '@angular/router';
import { AddtocartService } from '../servicesAddandRemove/addtocart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  totalPrice: number = 0;
  orderMsg: string = '';
  cart: any[] = [];
  ngOnInit() {
    this._service.totalPrice$.subscribe(price => {
      this.totalPrice = price;
    });
  }
  constructor(private router: Router, private _service: AddtocartService ,private fb:FormBuilder) {
    this.checkoutForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      contact: ['', [Validators.required,Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]],
      paymentMethod: ['cod', Validators.required],
      cardNumber: [''],
      cardExpiry: [''],
      cardCVV: ['']
    });
    this.checkoutForm.get('paymentMethod')?.valueChanges.subscribe(paymentMethod => {
      if (paymentMethod === 'card') {
        this.checkoutForm.get('cardNumber')?.setValidators([Validators.required, Validators.pattern('^[0-9]{16}$')]);
        this.checkoutForm.get('cardExpiry')?.setValidators([Validators.required]);
        this.checkoutForm.get('cardCVV')?.setValidators([Validators.required, Validators.pattern('^[0-9]{3}$')]);
      } else {
        this.checkoutForm.get('cardNumber')?.clearValidators();
        this.checkoutForm.get('cardExpiry')?.clearValidators();
        this.checkoutForm.get('cardCVV')?.clearValidators();
      }
    
      this.checkoutForm.get('cardNumber')?.updateValueAndValidity();
      this.checkoutForm.get('cardExpiry')?.updateValueAndValidity();
      this.checkoutForm.get('cardCVV')?.updateValueAndValidity();
    });
  }
  orderNow(): void {
    if (this.checkoutForm.valid) {
      const orderData = this.checkoutForm.value;
      this._service.orderProduct(orderData).subscribe((response) => {
        if (response.success) {
          this.orderMsg = 'Your order has been placed successfully!';
          this.router.navigate(['/orders']); // Redirect to a success page or another route
        } else {
          this.orderMsg = 'Failed to place the order. Please try again.';
        }
      });
    } else {
      this.orderMsg = 'Please fill out the form correctly.';
    }
  }
}
