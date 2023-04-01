import {Component} from '@angular/core';
import {Product} from "../../shared/interfaces";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  products: Product[] = [
    {
      image: '../../../assets/images/product.png',
      title: 'Тренер',
      price: 300
    },
    {
      image: '../../../assets/images/product.png',
      title: 'Тренер',
      price: 300
    },
    {
      image: '../../../assets/images/product.png',
      title: 'Тренер',
      price: 300
    },
    {
      image: '../../../assets/images/product.png',
      title: 'Тренер',
      price: 300
    },
    {
      image: '../../../assets/images/product.png',
      title: 'Тренер',
      price: 300
    },
  ]
}
