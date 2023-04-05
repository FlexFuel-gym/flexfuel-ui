import {Component, OnInit} from '@angular/core';
import {Pagination, Product, ProductsResponse, Response} from "../../shared/interfaces";
import {ProductsService} from "../../shared/services/products.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
  pagination: Pagination;

  private currentPage: number = 1;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getProducts(this.currentPage).subscribe({
      next: (response: Response<ProductsResponse>) => {
        this.products = response.data.products
        this.pagination = response.data.pagination
      }
    })
  }

  onPageChange(page: number) {
    this.currentPage = page

    this.productsService.getProducts(this.currentPage).subscribe({
      next: (response: Response<ProductsResponse>) => {
        this.products = response.data.products
        this.pagination = response.data.pagination
      }
    })
  }
}
