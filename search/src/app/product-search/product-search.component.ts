import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
})
export class ProductSearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch() {
    this.searchEvent.emit(this.searchTerm);
  }
}
