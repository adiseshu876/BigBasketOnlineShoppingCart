import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  query: string = '';
  category: string = 'fruits'; // Default category
  results: any[] = [];

  categories = ['fruits', 'grains', 'spices', 'oils', 'vegetables'];

  constructor(private searchService: SearchService) {}

  onSearch() {
    if (this.query) {
      this.searchService.searchProducts(this.query, this.category as 'fruitsApiUrl' | 'oilsApiUrl' | 'grainsApiUrl' | 'spicesApiUrl' | 'vegetablesApiUrl')
        .subscribe((data: any) => {
          this.results = data;
        });
    }
  }
  
}
