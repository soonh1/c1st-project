import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  price: number;
  costprice: number;
  created: string;
  title: string;
  id: number;
  productno: string;
  barcode: string;
  color: string | null;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  //products: Product[];
  //currentPage = 0;
  products: Product[];
  filteredProducts: any;
  currentPage: number = 0;

  constructor(private http: HttpClient) {
    this.products = [];
  }

  nextPage() {
    this.currentPage++;
  }

  prevPage() {
    this.currentPage--;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http
      .get<{ content: Product[] }>('assets/products.json')
      .subscribe((data) => {
        this.products = data.content;
        this.filteredProducts = this.products;
        console.log(data);
      });
  }

  getPages() {
    const totalPages = Math.ceil(this.products.length / 5);
    const start = Math.max(0, this.currentPage - 1);
    const end = Math.min(totalPages - 1, this.currentPage + 2);
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  }
  onSearch(searchTerm: string) {
    this.filteredProducts = this.products.filter((product: any) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    this.currentPage = 0;
  }
}
