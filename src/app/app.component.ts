import { Component } from '@angular/core';
import { Product } from '../interface/Product';
import { Student } from '../interface/Student';
import axios from 'axios';
import { Menus } from '../interface/Menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angu';
  // product: Product = {
  //   id: 1,
  //   title: 'iPhone 9',
  //   description: 'An apple mobile which is nothing like apple',
  //   price: 549,
  //   discountPercentage: 12.96,
  //   rating: 4.69,
  //   stock: 94,
  //   brand: 'Apple',
  //   category: 'smartphones',
  //   thumbnail: 'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg',
  //   images: [
  //     'https://cdn.dummyjson.com/product-images/1/1.jpg',
  //     'https://cdn.dummyjson.com/product-images/1/2.jpg',
  //     'https://cdn.dummyjson.com/product-images/1/3.jpg',
  //     'https://cdn.dummyjson.com/product-images/1/4.jpg',
  //     'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  //   ],
  // };

 

  students: Student[] = [
    {
      name: 'Lmao',
      age: 12,
      address: 'ỏiewdfd',
      className: 'r343242',
    },
    {
      name: 'Lma',
      age: 20,
      address: 'ỏiewdfd',
      className: 'r343242',
    },
    {
      name: 'Lm',
      age: 19,
      address: 'ỏiewdfd',
      className: 'r343242',
    },
  ];
  addStudent = (data: Student) => {
    this.students.push(data);
  };
  products: Product[] = [];
  addProduct = (data: Product) => {
    this.products.push(data);
  };
}
