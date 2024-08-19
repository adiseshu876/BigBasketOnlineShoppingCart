import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../servicesAddandRemove/addtocart.service';
import { ProductListDetailsType } from '../product-details/product-details.component';
import { ProductSService } from '../product-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart-products',
  templateUrl: './add-to-cart-products.component.html',
  styleUrls: ['./add-to-cart-products.component.css']
})
export class AddToCartProductsComponent implements OnInit {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  productsList: ProductListDetailsType[] = [];
  totalPrice: number = 0;

  constructor(
    private _cart: ProductSService,
    private _add: AddtocartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCarts();
  }

  getAllCarts() {
    this._add.getAllCarts().subscribe({
      next: (res) => {
        console.log(res);
        console.log('*received* from add to cart service get call');
        this.productsList = res;
        this.calculateTotalPrice();
      },
    });
  }

  onRemove(id: number): void {
    this._add.removeList(id).subscribe({
      next: (res) => {
        console.log('**Product removed**');
        this.getAllCarts();
      },
      error: (err) => {
        console.error('Error removing product:', err);
        // Optionally, you can provide feedback to the user
      },
      complete: () => {
        console.log('Remove operation completed');
      }
    });
  }

  getQuantity(productId: number): number {
    const product = this.productsList.find(p => p.id === productId);
    return product ? product.quantity : 0;
  }

  increaseQuantity(productId: number): void {
    const product = this.productsList.find(p => p.id === productId);
    if (product) {
      product.quantity++;
      this.calculateTotalPrice();
    }
  }

  decreaseQuantity(productId: number): void {
    const product = this.productsList.find(p => p.id === productId);
    if (product && product.quantity > 1) {
      product.quantity--;
      this.calculateTotalPrice();
    }
  }
  BuyProduct() {
    this.totalPrice = this.productsList.reduce((sum, item) => {
      const price = item.price || 0; // Ensure price is a number
      const quantity = item.quantity || 0; // Ensure quantity is a number
      return sum + (price * quantity);
    }, 0);
  
    // Use the service to store total price
    this._add.setTotalPrice(this.totalPrice);
  
    // Navigate to checkout page
    this.router.navigate(['/checkout']);
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.productsList.reduce((total, product) => {
      const price = product.price || 0; // Ensure price is a number
      const quantity = product.quantity || 0; // Ensure quantity is a number
      return total + (price * quantity);
    }, 0);
  }
}