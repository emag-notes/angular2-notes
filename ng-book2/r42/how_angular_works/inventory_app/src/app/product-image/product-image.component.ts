import {Component} from '@angular/core';
import {Product} from '../product/product.model';

/**
 * @ProductImageComponent - A component to show a single Product's image
 */
@Component({
  selector: 'product-image',
  host: {class: 'ui small image'},
  inputs: ['product'],
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  product: Product;
}
