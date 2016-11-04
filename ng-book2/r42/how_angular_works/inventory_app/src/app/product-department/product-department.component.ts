import { Component } from '@angular/core';
import {Product} from '../product/product.model';

/**
 * @ProductDepartmentComponent - A component to show the breadcrumbs to a
 * Product's department
 */
@Component({
  selector: 'product-department',
  inputs: ['product'],
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent {
  product: Product;
}
