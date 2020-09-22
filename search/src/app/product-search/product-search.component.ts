import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators';

import { Product } from './../../../../products';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})

export class ProductSearchComponent implements OnInit {
  _jsonURL = 'assets/products.json';

  products: Product[] = [];
  filteredProducts: Product[] = [];

  curPage: number;
  pageSize: number;
  sortBy: string;

  searchInputChanged = new Subject<string>();

  constructor(private http: HttpClient) {
    this.curPage = 1;
    this.pageSize = 8;
  }

  ngOnInit(): void {
    // read .json file and save to variable
    this.getJSON().subscribe(data => {
      this.products = data["content"];
    });

    // when search input changes, wait 150 ms, then filter products based on input, 
    // unless input changes again
    this.searchInputChanged.pipe(debounceTime(150), map(search => {
      return this.products.filter(product => this.includesAll(search, product.title))
    })).subscribe(products => {
      this.filteredProducts = products;
      this.sortProducts(this.sortBy); // sort products on every search, because the previous sort is cancelled by new filter
    })

  }

  getJSON(): Observable<Product[]> {
    return this.http.get<Product[]>(this._jsonURL);
  }

  numberOfPages() {
    return this.filteredProducts.length > 0 ? Math.ceil(this.filteredProducts.length / this.pageSize) : 1;
  };

  // monitor change in search input. On change, update Subject
  onKey(event: any) {
    this.searchInputChanged.next(event.target.value);
    if (event.target.value === "") {
      this.curPage = 1; // if search input is reset, return to page 1
    }
  }

  // returns true if productTitle contains every term (seperated by space) in searchTerm
  includesAll(searchTerm: string, productTitle: string): boolean {
    productTitle = productTitle.toLowerCase();
    let termArray = searchTerm.toLowerCase().split(" ");

    let includesAll = true;

    for (let i = 0; i < termArray.length; i++) {
      if (!productTitle.includes(termArray[i])) {
        includesAll = false;
        break;
      }
    }

    return includesAll
  }

  sortProducts(sortBy: string) {
    switch (sortBy) {
      case "Price - Lowest first":
        this.filteredProducts.sort((a, b) => (a.price > b.price ? 1 : -1))
        this.curPage = 1;
        this.sortBy = sortBy;
        break;
      case "Price - Highest first":
        this.filteredProducts.sort((a, b) => (a.price < b.price ? 1 : -1))
        this.curPage = 1;
        this.sortBy = sortBy;
        break;
      case "Alphabetical":
        // empty space is removed from title because a space in front of a title broke alphabetical sort
        this.filteredProducts.sort((a, b) => (a.title.toLowerCase().replace(/\s/g, '') > b.title.toLowerCase().replace(/\s/g, '') ? 1 : -1))
        this.curPage = 1;
        this.sortBy = sortBy;
        break;
    }

  }

}
