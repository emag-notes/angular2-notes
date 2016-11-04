import {Component} from '@angular/core';
import {Product} from '../product/product.model';

@Component({
  selector: 'product-list',
  inputs: ['productList'],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  /**
   * @input productList - the Product[] passed to us
   */
  productList: Product[];

  constructor() {
  }

}
