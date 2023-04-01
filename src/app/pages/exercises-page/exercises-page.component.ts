import {Component} from '@angular/core';
import {Exercises} from "../../shared/interfaces";

@Component({
  selector: 'app-exercises-page',
  templateUrl: './exercises-page.component.html',
  styleUrls: ['./exercises-page.component.scss']
})
export class ExercisesPageComponent {
  exercises: Exercises[] = [
    {
      image: '../../../assets/images/exercise-1.png',
      title: 'Присідання',
      description: 'Ця вправа дуже ефективна для розвитку міцності ніг та ягодиць. Станьте на ширині плечей, зігніть коліна і опустіть тіло вниз, ніби ви хочете сісти на стілець. Потім поверніться до стартової позиції. Повторіть вправу 10-15 разів.'
    },
    {
      image: '../../../assets/images/exercise-2.png',
      title: 'Віджимання від підлоги',
      description: "Ця вправа допоможе зміцнити м'язи грудей, трицепсів та плечей. Лягте на підлогу, покладіть долоні на підлогу біля плечей, підніміть тіло, опустіться вниз,  потім підніміться назад до стартової позиції. Повторіть вправу 10-15 разів."
    },
    {
      image: '../../../assets/images/exercise-3.png',
      title: 'Планка',
      description: 'Це вправа, яка допоможе зміцнити корпус та розвинути стійкість. Почніть на всіх чотирьох, потім опустіться на лікті, так щоб вони були під плечем. Розтягніть ноги назад, так щоб вони були паралельні землі, і затримайте цю позицію на 30-60 секунд.'
    },
  ];
}
