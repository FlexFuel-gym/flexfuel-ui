import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ButtonData, CoachData, CoachResponse, Response } from '../../core/interfaces';
import { CoachesService } from '../../core/services/coaches.service';
import { MODALS } from '../../core/enums';

@Component({
  selector: 'app-coaches-page',
  templateUrl: './coaches-page.component.html',
  styleUrls: ['./coaches-page.component.scss']
})
export class CoachesPageComponent {
  public modalCoachData: CoachData;
  public coaches: CoachData[] = [];
  public buttonData: ButtonData = {
    text: 'Записатись',
    type: 'blue-with-border',
    size: 'wide'
  };

  constructor(
    private coachesService: CoachesService,
    private ngxSmartModalService: NgxSmartModalService
  ) {
    this.coachesService.getCoachesRequest().subscribe({
      next: (response: Response<CoachResponse>) => {
        this.coaches = response.data.coaches;
      }
    });
  }

  public openCoachModal(id: string): void {
    this.modalCoachData = this.coaches.find((coach: CoachData) => coach.id === id)!;
    this.ngxSmartModalService.getModal(MODALS.COACH).open();
  }
}
