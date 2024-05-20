import { Component, Input } from '@angular/core';
import { Product } from '../../../interface/Product';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  constructor(private route: ActivatedRoute) {}
  @Input() product: Product = {} as Product;
  // productName: string = '';
  // image: string = '';
  // price: number = 0;

  // onClick = async () => {
  //   // const { data } = await axios.post('http://localhost:3000/products', {
  //   //   name: this.productName,
  //   //   image: this.image,
  //   //   price: this.price,
  //   // });
  //   // console.log(data);
  //   console.log(this.route.snapshot.params['id']);
  // };
  async ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    console.log(productId);

    const { data } = await axios.get(
      `http://localhost:3000/products/${productId}`
    );

    this.product = data;
  }

  onChangeImg = (url: string) => {
    this.product.thumbnail = url;
  };
}
