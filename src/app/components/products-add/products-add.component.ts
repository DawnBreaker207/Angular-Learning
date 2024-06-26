import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Product } from '../../../interface/Product';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.css',
})
export class ProductsAddComponent {
  // @Input() addProduct: any;
  @Output() addProduct = new EventEmitter<Product>();
  title: string = '';
  price: number = 0;
  thumbnail: string = '';
  display: boolean = false;
  onAddProduct = () => {
    const data: Product = {
      title: this.title,
      price: this.price,
      thumbnail: this.thumbnail,
    };
    this.addProduct.emit(data);
  };
  onCheck = (e: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {
      this.thumbnail = event.target.result;
    };
  };
}
