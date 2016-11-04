import { Component } from '@angular/core';

/**
 * @PriceDisplayComponent - A component to show the price of a
 * Product
 */
@Component({
  selector: 'price-display',
  inputs: ['price'],
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent {
  price: number;
}
