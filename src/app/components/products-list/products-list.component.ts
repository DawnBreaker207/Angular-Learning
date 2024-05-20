import { Component, Input } from '@angular/core';
import { Product } from '../../../interface/Product';
import axios from 'axios';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  // @Input() products: Product[] = [];
  products: Product[] = [];
  async ngOnInit() {
    const { data } = await axios.get('http://localhost:3000/products');
    console.log(data);
    this.products = data;
  }
}
