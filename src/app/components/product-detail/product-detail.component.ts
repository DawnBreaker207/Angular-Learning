import { Component, Input } from '@angular/core';
import { Product } from '../../../interface/Product';
import axios from 'axios';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() product: Product = {} as Product;
  productName: string = '';
  image: string = '';
  price: number = 0;

  onClick = async () => {
    const { data } = await axios.post('http://localhost:3000/products', {
      name: this.productName,
      image: this.image,
      price: this.price,
    });
    console.log(data);
  };
}
