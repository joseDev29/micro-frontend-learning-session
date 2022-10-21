import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  private readonly API_BASE_URL = 'https://fakestoreapi.com';

  constructor(private readonly http: HttpClient) {}

  findAll = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${this.API_BASE_URL}/products`);
  };
}
