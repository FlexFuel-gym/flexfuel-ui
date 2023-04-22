import { Component, OnInit } from '@angular/core';
import { Pagination, Product, ProductsResponse, Response } from '../../core/interfaces';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  public products: Product[] = [];
  public pagination: Pagination;

  private currentPage: number = 1;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getProducts(this.currentPage).subscribe({
      next: (response: Response<ProductsResponse>) => {
        this.products = response.data.products;
        this.pagination = response.data.pagination;
      }
    });
  }

  public onPageChange(page: number) {
    this.currentPage = page;

    this.productsService.getProducts(this.currentPage).subscribe({
      next: (response: Response<ProductsResponse>) => {
        this.products = response.data.products;
        this.pagination = response.data.pagination;
      }
    });
  }
}
