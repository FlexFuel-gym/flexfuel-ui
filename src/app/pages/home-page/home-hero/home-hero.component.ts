import {Component} from '@angular/core';
import {ButtonData} from "../../../shared/interfaces";

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent {
  buttonData: ButtonData = {
    text: 'Обрати тренера',
    size: 'large',
    type: 'blue'
  }
}
