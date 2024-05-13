import { Component, Input } from '@angular/core';
import { Product } from '../../../interface/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  @Input() products: Product[] = [];
}
