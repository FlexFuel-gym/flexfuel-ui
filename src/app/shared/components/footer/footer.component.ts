import { Component } from '@angular/core';
import { RouterData } from '../../../core/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public routerData: RouterData[] = [
    {
      name: 'Головна',
      link: ''
    },
    {
      name: 'Тренувальні вправи',
      link: 'exercises'
    },
    {
      name: 'Тренери',
      link: 'coaches'
    },
    {
      name: 'Магазин',
      link: 'products'
    },
    {
      name: 'Про нас',
      link: 'about-us'
    }
  ];

  public scrollTop() {
    scroll({ top: 0 });
  }
}
