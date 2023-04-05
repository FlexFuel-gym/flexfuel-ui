import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BuyProduct, CustomerData, ProductResponse, ProductsResponse, Response} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly COUNT_ITEMS_PER_PAGE: number = 12;

  constructor(private http: HttpClient) {
  }

  getProduct(productId: string): Observable<Response<ProductResponse>> {
    return this.http.get<Response<ProductResponse>>('http://localhost:10000/api/product/product', {
      params: {
        'product-id': productId
      }
    })
  }

  getProducts(page: number, count: number = this.COUNT_ITEMS_PER_PAGE): Observable<Response<ProductsResponse>> {
    return this.http.get<Response<ProductsResponse>>('http://localhost:10000/api/product/products', {
      params: {
        page,
        count
      }
    })
  }

  buyProduct(productId: string, customerData: CustomerData): Observable<Response<BuyProduct>> {
    return this.http.post<Response<BuyProduct>>('http://localhost:10000/api/product/buy-product', {
      productId,
      customerData
    })
  }
}
