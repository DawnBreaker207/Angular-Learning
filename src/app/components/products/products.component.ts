import { Component, Input } from '@angular/core';
import { Product } from '../../../interface/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Input() products: Product = {} as Product;
}
