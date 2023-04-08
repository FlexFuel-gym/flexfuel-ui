import { Component } from '@angular/core';
import { Achievement } from '../../../core/interfaces';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent {
  public achievements: Achievement[] = [
    {
      image: '../../../../assets/images/people.png',
      title: 'Кількість клієнтів',
      description: 'У нашому спортзалі тренуються більше 5000 задоволених клієнтів, які досягли своїх фітнес-цілей та отримали більше енергії і життєвого задоволення.'
    },
    {
      image: '../../../../assets/images/strong.png',
      title: 'Наші тренери',
      description: 'Ми маємо команду кваліфікованих та досвідчених тренерів, які допомагають нашим клієнтам досягати максимальних результатів.'
    },
    {
      image: '../../../../assets/images/cup.png',
      title: 'Наші досягнення',
      description: 'Ми - переможці різноманітних змагань і турнірів, проведених в галузі фітнесу. Ми виграли нагороди за кращий спортзал року, кращий тренажерний зал та кращого тренера року у Вінниці.'
    }
  ];
}
