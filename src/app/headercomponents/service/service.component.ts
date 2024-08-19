import { Component, OnInit } from '@angular/core';
import { OilsService } from 'src/app/services/oils.service';
import { ProductListDetailsType } from 'src/app/shoppingComponents/product-details';
import { AddtocartService } from 'src/app/shoppingComponents/servicesAddandRemove/addtocart.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent  implements OnInit{
  successMessage: string | null = null;
  errorMessage: string | null = null;
  productsList: ProductListDetailsType[] = [];
  cart: ProductListDetailsType[] = [];



  constructor(private _oils:OilsService,private _addtocart:AddtocartService){}
ngOnInit(): void {
  this.FromOils()
}
FromOils() {
  this._oils.getAllOils().subscribe({
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

OnOils(product: ProductListDetailsType) {
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
