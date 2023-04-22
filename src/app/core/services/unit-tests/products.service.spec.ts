import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductsService } from '../products.service';
import { EnvironmentService } from '../environment.service';
import { BuyProduct, ProductResponse, ProductsResponse, Response } from '../../interfaces';
import { buyProductResponse, getProductResponse, getProductsResponse } from './expected-responses/products-responses';

describe('ProductsService', () => {
  let service: ProductsService;
  let mockHttp: HttpTestingController;

  const mockEnvironmentService = {
    environment: {
      apiUrl: 'https://flexfuel.onrender.com/api'
    }
  };

  const requestLinks = {
    productProduct: (productId: string) => `/product/product?product-id=${productId}`,
    productProducts: (page: number, count?: number) => `/product/products?page=${page}&count=${count || 12}`,
    productBuyProduct: '/product/buy-product'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsService,
        { provide: EnvironmentService, useValue: mockEnvironmentService }
      ],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Requests', () => {
    it('getProduct(): should make request', () => {
      const productId = 'id';

      service.getProduct(productId).subscribe({
        next: (response: Response<ProductResponse>) => {
          expect(response).toEqual(getProductResponse);
        }
      });

      expectedRequest(requestLinks.productProduct(productId), 'GET', getProductResponse);
    });

    it('getProducts(): should make request', () => {
      const page = 1;

      service.getProducts(page).subscribe({
        next: (response: Response<ProductsResponse>) => {
          expect(response).toEqual(getProductsResponse);
        }
      });

      expectedRequest(requestLinks.productProducts(page), 'GET', getProductsResponse);
    });

    it('buyProduct(): should make request', () => {
      const productId = 'id';
      const customerData = {
        id: 'id',
        fullName: 'fullName',
        phoneNumber: 'phoneNumber',
        deliveryCompany: 'deliveryCompany',
        deliveryCityRef: 'deliveryCityRef',
        deliveryWarehouse: 'deliveryWarehouse'
      };

      service.buyProduct(productId, customerData).subscribe({
        next: (response: Response<BuyProduct>) => {
          expect(response).toEqual(buyProductResponse);
        }
      });

      expectedRequest(requestLinks.productBuyProduct, 'POST', buyProductResponse);
    });
  });

  const expectedRequest = (requestLink: string, method: string, responseData: any) => {
    const request = mockHttp.expectOne(mockEnvironmentService.environment.apiUrl + requestLink);
    expect(request.request.method).toBe(method);
    request.flush(responseData);
  };
});
