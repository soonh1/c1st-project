import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert("The product has been shared!");
    console.log("share button clicked and showed in console");
  }
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
    console.log("Crazy price - is over 799");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
