import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ButtonData } from '../../../../core/interfaces';
import { SubscriptionPlanService } from '../../../../core/services/subscription-plan.service';

@Component({
  selector: 'app-activate-plan-modal',
  templateUrl: './activate-plan-modal.component.html',
  styleUrls: ['./activate-plan-modal.component.scss']
})
export class ActivatePlanModalComponent implements OnInit {
  public activePlanForm: FormGroup;
  public buttonData: ButtonData = {
    text: 'ПЕРЕВІРИТИ',
    size: 'wide',
    type: 'blue'
  };

  constructor(
    private subscriptionPlanService: SubscriptionPlanService,
    private toastrService: ToastrService,
    private modalService: NgxSmartModalService
  ) {
  }

  ngOnInit() {
    this.activePlanForm = new FormGroup<any>({
      activationCode: new FormControl(undefined, [
        Validators.required
      ])
    });
  }

  public onSubmit() {
    if (this.activePlanForm.invalid) {
      return;
    }

    const { activationCode } = this.activePlanForm.value;

    this.subscriptionPlanService.isPaymentSuccess(activationCode).subscribe({
      next: (isPaymentSuccess: boolean) => {
        if (isPaymentSuccess) {
          this.modalService.closeAll();
          this.subscriptionPlanService.planKey = activationCode;
          this.toastrService.success('Код дійсний!', 'Вітаємо!');
        } else {
          this.toastrService.error('Не вірний код =(');
        }
      }
    });
  }
}
