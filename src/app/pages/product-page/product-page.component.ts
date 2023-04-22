import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Response, ButtonData, ProductResponse, Product } from '../../core/interfaces';
import { MODALS } from '../../core/enums';
import { BuyModalComponent } from '../../shared/components/modals/buy-modal/buy-modal.component';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  public productData: Product;
  public productId: string;
  public buttonData: ButtonData = {
    text: 'Замовити',
    type: 'blue',
    size: 'medium'
  };

  private paramsSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxSmartModalService: NgxSmartModalService,
    private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe({
      next: (params: Params) => {
        this.productId = params['id'];

        this.productsService.getProduct(this.productId).subscribe({
          next: (response: Response<ProductResponse>) => {
            this.productData = response.data.product;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  public onClick() {
    this.ngxSmartModalService.create(MODALS.BUY, BuyModalComponent).open();
  }
}
