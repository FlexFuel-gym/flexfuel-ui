import {Component} from '@angular/core';
import {ButtonData, CoachData} from "../../shared/interfaces";
import {CoachesService} from "../../shared/services/coaches.service";
import {NgxSmartModalService} from "ngx-smart-modal";
import {MODALS} from "../../shared/enums";

@Component({
  selector: 'app-coaches-page',
  templateUrl: './coaches-page.component.html',
  styleUrls: ['./coaches-page.component.scss']
})
export class CoachesPageComponent {
  modalCoachData: CoachData;
  coaches: CoachData[] = [];
  buttonData: ButtonData = {
    text: 'Записатись',
    type: "blue-with-border",
    size: "wide"
  }


  constructor(private coachesService: CoachesService, private ngxSmartModalService: NgxSmartModalService) {
    this.coachesService.coaches$.subscribe({
      next: (coaches: CoachData[]) => {
        this.coaches = coaches
      }
    })
  }

  openCoachModal(id: string) {
    this.modalCoachData = this.coaches.find((coach) => coach.id === id)!
    this.ngxSmartModalService.getModal(MODALS.COACH).open()
  }
}
