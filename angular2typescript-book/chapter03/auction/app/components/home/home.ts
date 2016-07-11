import {Component} from '@angular/core';
import {ProductService, Product} from '../../services/product-service';
import CarouselComponent from '../carousel/carousel';
import ProductItemComponent from '../product-item/product-item';

@Component({
  selector: 'auction-home-page',
  providers: [ProductService],
  directives: [
    CarouselComponent,
    ProductItemComponent
  ],
  styleUrls: ['/home.css'],
  template: `
    <div class="row carousel-holder">
      <div class="col-md-12">
        <auction-carousel></auction-carousel>
      </div>
      <div class="row">
        <div *ngFor="let prod of products" class="col-sm-4 col-lg-4 col-md-4">
          <auction-product-item [product]="prod"></auction-product-item>
        </div>
      </div>
    </div>
  `
})
export default class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}