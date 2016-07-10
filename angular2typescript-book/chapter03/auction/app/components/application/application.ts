import {Component, ViewEncapsulation} from '@angular/core';
import CarouselComponent from '../carousel/carousel';
import FooterComponent from '../footer/footer';
import NavbarComponent from '../navbar/navbar';
import ProductItemComponent from '../product-item/product-item';
import SearchComponent from '../search/search';
import {Product, ProductService} from '../../services/product-service';

@Component({
  selector: 'auction-application',
  providers: [
    ProductService
  ],
  templateUrl: 'app/components/application/application.html',
  styleUrls: ['app/components/application/application.css'],
  directives: [
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent],
  encapsulation: ViewEncapsulation.None
})
export default class ApplicationComponent {
  products: Array<Product> = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
