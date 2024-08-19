import { Component, OnInit } from '@angular/core';
import { GrainsService } from 'src/app/services/grains.service';
import { ProductListDetailsType } from 'src/app/shoppingComponents/product-details';
import { AddtocartService } from 'src/app/shoppingComponents/servicesAddandRemove/addtocart.service';

@Component({
  selector: 'app-grains',
  templateUrl: './grains.component.html',
  styleUrls: ['./grains.component.css'],
})
export class GrainsComponent implements OnInit {
  constructor(
    private _grains: GrainsService,
    private _addtocart: AddtocartService
  ) {}

  successMessage: string | null = null;
  errorMessage: string | null = null;
  productsList: ProductListDetailsType[] = [];
  cart: ProductListDetailsType[] = [];

  ngOnInit(): void {
    this.AllGrains();
  }

  AllGrains() {
    this._grains.allGrains().subscribe({
      next: (res) => {
        console.log('***response from get call productservice **', res);
        this.productsList = res.map((product: any) => ({
          ...product,
          quantity: 1, // Initialize quantity to 1 for all products
        }));
      },
      error: (err) => {
        console.error('Error loading products:', err);
      },
    });
  }

  Ongrains(product: ProductListDetailsType) {
    const existingCartItem = this.cart.find((item) => item.id === product.id);

    if (existingCartItem) {
      this.errorMessage = 'Product is already added to the cart!';
      this.successMessage = null;
      this.clearMessagesAfterDelay();
    } else {
      this.cart.push({ ...product, quantity: 1 });
      this.updateCart(product);
    }
  }

  updateCart(product: ProductListDetailsType) {
    this._addtocart.getAllProducts(product).subscribe({
      next: (res) => {
        console.log('***Product added to cart***', res);
        this.successMessage = 'Product was successfully added to the cart!';
        this.errorMessage = null;
        this.clearMessagesAfterDelay();
      },
      error: (err) => {
        console.error('Error adding product to cart:', err);
        this.errorMessage =
          'There was an error adding the product to the cart.';
        this.successMessage = null;
        this.clearMessagesAfterDelay();
      },
    });
  }

  clearMessagesAfterDelay(): void {
    setTimeout(() => {
      this.successMessage = null;
      this.errorMessage = null;
    }, 3000); // 3000 milliseconds = 3 seconds
  }
}
