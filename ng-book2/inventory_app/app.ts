import {Component, EventEmitter} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

class Product {
  constructor(public sku:string,
              public name:string,
              public imageUrl:string,
              public department:string[],
              public price:number) {
  }
}

@Component({
  selector: 'inventory-app',
  template: `
    <div class="inventory-app">
      <ul>
        <li *ngFor="#product of products">
          <h1>{{product.name}}</h1>
         <span>{{product.sku}}</span>
        </li>
      </ul>
    </div>`
})
class InventoryApp {
  products:Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected(product:Product):void {
    console.log('Product clicked: ', product)
  }

}

bootstrap(InventoryApp);