import { Component, OnInit } from '@angular/core';
import { Pagination, Product, ProductsResponse, Response } from '../../core/interfaces';
import { ProductsService } from '../../core/services/products.service';
import { AdditionalService } from '../../core/services/additional.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  public products: Product[] = [];
  public pagination: Pagination;

  private currentPage: number = 1;

  constructor(private productsService: ProductsService, private additionalService: AdditionalService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(page: number = this.currentPage) {
    this.productsService.getProducts(page).subscribe({
      next: (response: Response<ProductsResponse>) => {
        this.currentPage = response.data.pagination.currentPage;
        this.products = response.data.products;
        this.pagination = response.data.pagination;
      }
    });
  }

  public onPageChange(page: number) {
    this.getProducts(page);
    this.additionalService.scrollTop();
  }
}
