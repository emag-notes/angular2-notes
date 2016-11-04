import { Component, OnInit } from '@angular/core';
import {Product} from './product.model';

/**
 * @Product: A component for the view of single Product
 */
@Component({
  selector: 'product',
  inputs: ['product'],
  host: {'class': 'item'},
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product;
}
