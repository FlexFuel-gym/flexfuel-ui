import {Component} from '@angular/core';
import {RouterData} from "../../interfaces";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  routerData: RouterData[] = [
    {
      name: 'Головна',
      link: ''
    },
    {
      name: 'Тренувальні вправи',
      link: 'exercises'
    },
    {
      name: 'Магазин',
      link: 'products'
    },
    {
      name: 'Про нас',
      link: 'about-us'
    },
  ]

  scrollTop() {
    scroll({top: 0})
  }
}
