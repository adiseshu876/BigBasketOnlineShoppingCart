import { Component, OnInit } from '@angular/core';
import { ProductListDetailsType } from 'src/app/shoppingComponents/product-details';
import { ProductSService } from 'src/app/shoppingComponents/product-s.service';
import { SellerControlsService } from '../seller-controls.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  vegetablesList: ProductListDetailsType[] = [];
  fruitsList: ProductListDetailsType[] = [];
  oilsList: ProductListDetailsType[] = [];
  grainsList: ProductListDetailsType[] = [];
  spicesList: ProductListDetailsType[] = [];

  constructor(private _products: ProductSService,private _seller:SellerControlsService) {}

  ngOnInit(): void {
    this.loadVegetables();
    this.loadFruits();
    this.loadOils();
    this.loadGrains();
    this.loadSpices();
    
  }

  loadVegetables() {
    this._products.getAllProducts().subscribe({
      next: (result) => {
        if (result) {
          this.vegetablesList = result;
        }
      },
      error: (err) => {
        console.error('Error fetching vegetables', err);
      }
    });
  }

  loadFruits(): void {
    this._seller.getFruitsApi().subscribe({
      next: (res: ProductListDetailsType[]) => {
        console.log('***Fruits fetched***', res);
        this.fruitsList = res;
      },
      error: (err) => {
        console.error('Error fetching fruits', err);
      }
    });
  }

  loadOils(): void {
    this._seller.getOilsApi().subscribe({
      next: (res: ProductListDetailsType[]) => {
        console.log('***Oils fetched***', res);
        this.oilsList = res;
      },
      error: (err) => {
        console.error('Error fetching oils', err);
      }
    });
  }

  loadGrains(): void {
    this._seller.getGrainsApi().subscribe({
      next: (res: ProductListDetailsType[]) => {
        console.log('***Grains fetched***', res);
        this.grainsList = res;
      },
      error: (err) => {
        console.error('Error fetching grains', err);
      }
    });
  }

  loadSpices(): void {
    this._seller.getSpicesApi().subscribe({
      next: (res: ProductListDetailsType[]) => {
        console.log('***Spices fetched***', res);
        this.spicesList = res;
      },
      error: (err) => {
        console.error('Error fetching spices', err);
      }
    });
  }
  deleteProduct(productId: number, category: string): void {
    if (!productId) {
        console.error('Product ID is undefined or null');
        return;
    }

    this._seller.deleteProduct(productId, category).subscribe({
        next: () => {
            console.log(`Product with ID ${productId} in category ${category} was deleted`);
            this.removeProductFromList(productId, category);
            this.refreshUI(category); // Refresh the UI after deletion
        },
        error: (err) => {
            console.error('Error deleting product', err);
        }
    });
}

deleteProductFromUI(product: ProductListDetailsType, category: string): void {
  console.log('Attempting to delete product:', product);

  if (product && product.id) {
      console.log(`Deleting product with ID: ${product.id} from category: ${category}`);
      this.deleteProduct(product.id, category);
  } else {
      console.error('Product ID is undefined or null:', product);
  }
}

private refreshUI(category: string): void {
    switch (category.toLowerCase()) {
        case 'vegetables':
            this.loadVegetables();
            break;
        case 'fruits':
            this.loadFruits();
            break;
        case 'oils':
            this.loadOils();
            break;
        case 'grains':
            this.loadGrains();
            break;
        case 'spices':
            this.loadSpices();
            break;
        default:
            console.warn(`Unknown category: ${category}`);
            break;
    }
}

private removeProductFromList(productId: number, category: string): void {
  const normalizedCategory = category.toLowerCase();
  console.log(`Removing product with ID: ${productId} from ${category} list`);

  switch (normalizedCategory) {
      case 'vegetables':
          this.vegetablesList = this.vegetablesList.filter(item => item.id !== productId);
          break;
      case 'fruits':
          this.fruitsList = this.fruitsList.filter(item => item.id !== productId);
          break;
      case 'oils':
          this.oilsList = this.oilsList.filter(item => item.id !== productId);
          break;
      case 'grains':
          this.grainsList = this.grainsList.filter(item => item.id !== productId);
          break;
      case 'spices':
          this.spicesList = this.spicesList.filter(item => item.id !== productId);
          break;
      default:
          console.warn(`Unknown category: ${category}`);
          break;
  }
}



  
}