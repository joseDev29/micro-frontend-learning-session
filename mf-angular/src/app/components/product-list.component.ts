import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2 class="text-2xl font-semibold mb-8">Products</h2>
        <div
          class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 place-items-center"
        >
          <app-product-card
            *ngFor="let product of products"
            [product]="product"
          ></app-product-card>
        </div>
      </div>
    </div>
  `,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = false;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.setLoading(true);
    this.productService.findAll().subscribe(this.handleFindProducts);
  }

  handleFindProducts = (products: Product[]) => {
    this.setProducts(products);
    this.setLoading(false);
  };

  setProducts = (products: Product[]) => {
    this.products = products;
  };

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };
}
