import { Component } from '@angular/core';
import { ButtonData } from '../../../core/interfaces';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent {
  public buttonData: ButtonData = {
    text: 'Обрати тренера',
    size: 'large',
    type: 'blue'
  };
}
