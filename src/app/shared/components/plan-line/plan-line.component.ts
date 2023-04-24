import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ButtonData } from '../../../core/interfaces';
import { MODALS } from '../../../core/enums';

@Component({
  selector: 'app-plan-line',
  templateUrl: './plan-line.component.html',
  styleUrls: ['./plan-line.component.scss']
})
export class PlanLineComponent {
  public buttonData: ButtonData = {
    text: 'Детальніше',
    type: 'white',
    size: 'medium'
  };

  constructor(private modalService: NgxSmartModalService) {
  }

  public onDetailsButtonClick() {
    this.modalService.open(MODALS.PLAN_DETAILS);
  }
}
