import { Component, OnInit } from '@angular/core';
import { ProductSService } from '../product-s.service';
import { ProductListDetails } from '.';
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
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _service: ProductSService) {}

  productsList: ProductListDetailsType[] = [];
  ngOnInit(): void {
    this.LoadProducts();
  }
  LoadProducts() {
    this._service.getAllProducts().subscribe((responce) => {
      console.log('from received service', responce);
      this.productsList = responce.data;
    });
  }
  onProductSelection(id:string){
    // this.router.navigate([`/product/${id}`])

  } 
}
 export interface ProductListDetailsType{
  name:string,
  price:string,
  id:string
 }