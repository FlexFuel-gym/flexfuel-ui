import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ButtonData} from "../../shared/interfaces";
import {NgxSmartModalService} from "ngx-smart-modal";
import {MODALS} from "../../shared/enums";
import {BuyModalComponent} from "../../shared/components/modals/buy-modal/buy-modal.component";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  buttonData: ButtonData = {
    text: 'Замовити',
    type: 'blue',
    size: 'medium'
  }

  private paramsSub: Subscription;
  private productId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxSmartModalService: NgxSmartModalService
  ) {
  }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.productId = params['id']
        console.log(this.productId)
      }
    })
  }

  onClick() {
    this.ngxSmartModalService.create(MODALS.BUY, BuyModalComponent).open()
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe()
  }
}
