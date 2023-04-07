import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ButtonData, CoachData} from "../../../interfaces";

@Component({
  selector: 'app-coach-modal',
  templateUrl: './coach-modal.component.html',
  styleUrls: ['./coach-modal.component.scss']
})
export class CoachModalComponent implements OnInit, OnChanges {
  @Input() coachData: CoachData;
  coachForm: FormGroup;
  buttonData: ButtonData = {
    text: 'Записатись',
    size: "wide",
    type: "blue"
  }

  ngOnInit() {
    this.coachForm = new FormGroup<any>({
      fullName: new FormControl(undefined, [
        Validators.required
      ]),
      phoneNumber: new FormControl(undefined, [
        Validators.required
      ]),
      schedule: new FormControl(undefined, [
        Validators.required
      ])
    })
  }

  ngOnChanges() {
    this.coachForm?.get('schedule')?.reset()
  }

  onSubmit() {
    if (this.coachForm.invalid) {
      return
    }

    console.log(this.coachForm.value)
  }
}
