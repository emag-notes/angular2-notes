import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import StarsComponent from '../stars/stars';
import {Product} from '../../services/product-service';

@Component({
  selector: 'auction-product-item',
  styleUrls: ['app/components/product-item/product-item.css'],
  templateUrl: 'app/components/product-item/product-item.html',
  directives: [ROUTER_DIRECTIVES, StarsComponent]
})
export default class ProductItemComponent {
  @Input() product: Product;
}
