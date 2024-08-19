import { Component } from '@angular/core';
interface CartItem {
  cartId: number;
  productImageUrl: string;
  productShortName: string;
  productPrice: number;
}

interface User {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = '';

  search() {
    console.log('Searching for:', this.searchTerm);
    // Implement search functionality here
  }
  cartData: CartItem[] = [
    {
      cartId: 1,
      productImageUrl: 'path_to_image1.jpg',
      productShortName: 'Product 1',
      productPrice: 29.99
    },
    {
      cartId: 2,
      productImageUrl: 'path_to_image2.jpg',
      productShortName: 'Product 2',
      productPrice: 49.99
    }
  ];

  // User data (for demonstration)
  loggedUSerData: User | null = null;

  // Models for forms
  userRegister = {
    Name: '',
    MobileNo: '',
    Password: ''
  };

  loginObj = {
    UserName: '',
    UserPassword: ''
  };

  // Method to handle user registration
  onRegister() {
    // Perform registration logic here
    console.log('User Registered:', this.userRegister);
    this.userRegister = { Name: '', MobileNo: '', Password: '' }; // Clear form
    this.dismissModal('#myModal'); // Close modal
  }

  // Method to handle user login
  onLogin() {
    // Perform login logic here
    console.log('User Logged In:', this.loginObj);
    this.loggedUSerData = { name: this.loginObj.UserName }; // Mock login
    this.loginObj = { UserName: '', UserPassword: '' }; // Clear form
    this.dismissModal('#loginModel'); // Close modal
  }

  // Method to handle cart item removal
  removeCartProduct(cartId: number) {
    this.cartData = this.cartData.filter(item => item.cartId !== cartId);
  }

  // Method to handle user logout
  logOff() {
    this.loggedUSerData = null;
  }

  // Method to dismiss modal
  dismissModal(modalId: string) {
    
  }
}
