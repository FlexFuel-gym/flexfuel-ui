import { Component } from '@angular/core';
import { RouterData } from '../../../core/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public isMenuVisible: boolean = false;
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

  public handleMenuVisible() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  public closeMenu() {
    this.isMenuVisible = false;
  }

  public closeMenuAndScrollTop() {
    this.closeMenu();
    scroll({ top: 0 });
  }
}
