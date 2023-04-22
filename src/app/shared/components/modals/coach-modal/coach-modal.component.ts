import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonData, CoachData, RegisterToCoachResponse, Response } from '../../../../core/interfaces';
import { CoachesService } from '../../../../core/services/coaches.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coach-modal',
  templateUrl: './coach-modal.component.html',
  styleUrls: ['./coach-modal.component.scss']
})
export class CoachModalComponent implements OnInit, OnChanges {
  @Input() public coachData: CoachData;
  public coachForm: FormGroup;
  public buttonData: ButtonData = {
    text: 'Записатись',
    size: 'wide',
    type: 'blue'
  };

  constructor(private coachesService: CoachesService, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.coachForm = new FormGroup<any>({
      fullName: new FormControl(undefined, [
        Validators.required
      ]),
      phoneNumber: new FormControl(undefined, [
        Validators.required
      ]),
      periodOfTime: new FormControl(undefined, [
        Validators.required
      ])
    });
  }

  ngOnChanges() {
    this.coachForm?.get('periodOfTime')?.reset();
  }

  public onSubmit() {
    if (this.coachForm.invalid) {
      return;
    }

    this.coachesService.registerToCoachRequest(this.coachData.id, this.coachForm.value).subscribe({
      next: (response: Response<RegisterToCoachResponse>) => {
        if (response.success) {
          const customer = response.data.customer;
          this.toastrService.success(`${customer.fullName}, ви успішно записались на ${customer.periodOfTime}, до Вас найблищим часом зателефонує наш тренер`, 'Успішно заброньовано!');
        }
      }
    });
  }
}
