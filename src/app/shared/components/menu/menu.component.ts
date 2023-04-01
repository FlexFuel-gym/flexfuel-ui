import {Component} from '@angular/core';
import {RouterData} from "../../interfaces";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isMenuVisible: boolean = false;
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

  handleMenuVisible() {
    this.isMenuVisible = !this.isMenuVisible
  }
}
