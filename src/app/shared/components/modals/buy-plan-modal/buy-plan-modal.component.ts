import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { SubscriptionPlanService } from '../../../../core/services/subscription-plan.service';
import { ButtonData } from '../../../../core/interfaces';

@Component({
  selector: 'app-buy-plan-modal',
  templateUrl: './buy-plan-modal.component.html',
  styleUrls: ['./buy-plan-modal.component.scss']
})
export class BuyPlanModalComponent implements OnInit, OnDestroy {
  public planKey = '';
  public buttonData: ButtonData = {
    text: 'ПЕРЕВІРИТИ ОПЛАТУ',
    type: 'blue',
    size: 'wide'
  };

  private planKeySubscription: Subscription;

  constructor(
    private subscriptionPlanService: SubscriptionPlanService,
    private toastrService: ToastrService,
    private modalService: NgxSmartModalService
  ) {
  }

  ngOnInit() {
    this.planKeySubscription = this.subscriptionPlanService.planKey$.subscribe({
      next: (planKey: string) => {
        this.planKey = planKey;
      }
    });
  }

  ngOnDestroy() {
    this.planKeySubscription.unsubscribe();
  }

  public checkPayment() {
    this.subscriptionPlanService.isPaymentSuccess().subscribe({
      next: (isPaymentSuccess: boolean) => {
        if (isPaymentSuccess) {
          this.modalService.closeAll();
          this.toastrService.success('Ви успішно придбали підписку!', 'Вітаємо!');
        } else {
          this.toastrService.error('Спробуйте ще раз через 1 хвилину!');
        }
      }
    });
  }
}
