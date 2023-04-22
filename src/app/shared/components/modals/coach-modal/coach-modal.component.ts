import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonData, CoachData } from '../../../../core/interfaces';
import { CoachesService } from '../../../../core/services/coaches.service';

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

  constructor(private coachesService: CoachesService) {
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

    this.coachesService.registerToCoach(this.coachData.id, this.coachForm.value);
  }
}
