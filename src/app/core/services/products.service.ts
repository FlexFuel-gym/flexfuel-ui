import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyProduct, CustomerData, ProductResponse, ProductsResponse, Response } from '../interfaces';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly COUNT_ITEMS_PER_PAGE: number = 12;

  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {
  }

  public getProduct(productId: string): Observable<Response<ProductResponse>> {
    return this.http.get<Response<ProductResponse>>(`${this.environmentService.environment.apiUrl}/product/product`, {
      params: {
        'product-id': productId
      }
    });
  }

  public getProducts(page: number, count: number = this.COUNT_ITEMS_PER_PAGE): Observable<Response<ProductsResponse>> {
    return this.http.get<Response<ProductsResponse>>(`${this.environmentService.environment.apiUrl}/product/products`, {
      params: {
        page,
        count
      }
    });
  }

  public buyProduct(productId: string, customerData: CustomerData): Observable<Response<BuyProduct>> {
    return this.http.post<Response<BuyProduct>>(`${this.environmentService.environment.apiUrl}/product/buy-product`, {
      productId,
      customerData
    });
  }
}
