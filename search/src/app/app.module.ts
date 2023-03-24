import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductSearchComponent, ProductListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
