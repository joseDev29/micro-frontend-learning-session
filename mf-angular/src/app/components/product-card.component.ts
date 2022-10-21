import { Component, Input } from '@angular/core';

import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  template: `
    <div
      class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="w-full aspect-square overflow-hidden rounded-t-lg">
        <img
          class="w-full h-full object-cover"
          src="{{ product?.image }}"
          alt="{{ product?.title }}"
        />
      </div>

      <div class="pt-5 px-5 pb-5">
        <h5
          class="text-base font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ product!.title | cutText: 50 }}
        </h5>

        <div class="flex items-center mt-2.5 mb-5">
          <svg
            *ngFor="let isYellow of getRate((product?.rating)!.rate)"
            [ngClass]="{
              'text-yellow-300': isYellow,
              'text-gray-300': !isYellow
            }"
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
            >{{ product?.rating?.count }} reviews</span
          >
        </div>

        <div class="flex justify-between items-center">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">{{
            product?.price | currency: 'USD'
          }}</span>
          <a
            href="/products/{{ product?.id }}"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >View</a
          >
        </div>
      </div>
    </div>
  `,
})
export class ProductCardComponent {
  @Input('product') product: Product | null = null;

  getRate = (rate: number) => {
    return Array.from({ length: 5 }, (_, index) => index + 1).map(
      (index) => index <= Math.round(rate)
    );
  };
}
