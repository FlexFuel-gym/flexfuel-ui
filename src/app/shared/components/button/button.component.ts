import {Component, Input} from '@angular/core';
import {ButtonData} from "../../interfaces";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonData: ButtonData;
  @Input() disabled?: boolean;
}
