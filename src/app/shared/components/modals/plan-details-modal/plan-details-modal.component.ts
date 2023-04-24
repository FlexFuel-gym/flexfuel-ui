import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ButtonData } from '../../../../core/interfaces';
import { MODALS } from '../../../../core/enums';

@Component({
  selector: 'app-plan-details-modal',
  templateUrl: './plan-details-modal.component.html',
  styleUrls: ['./plan-details-modal.component.scss']
})
export class PlanDetailsModalComponent {
  public options = [
    {
      title: 'Таблиця з вправами',
      description: 'У вас з’явиться доступ до таблиці з вправами, які допоможуть Вам тримати форму у відмінному стані'
    },
    {
      title: 'Самоконтроль',
      description: 'У вас з’явиться таймер, який допоможе Вам відслідковувати час витрачений на вправи'
    }
  ];

  public buttonData: ButtonData = {
    text: 'ОПЛАТИТИ',
    type: 'blue',
    size: 'wide'
  };

  constructor(private modalService: NgxSmartModalService) {
  }

  public onPayPlanClick() {
    this.modalService.closeLatestModal();
    this.modalService.open(MODALS.BUY_PLAN);
  }

  public onActivatePlanClick() {
    this.modalService.closeLatestModal();
    this.modalService.open(MODALS.ACTIVATE_PLAN);
  }
}
