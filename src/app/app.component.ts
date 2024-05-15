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

  menus: Menus[] = [
    {
      id: 1,
      name: 'Home',
      path: 'home',
      parent: 0,
    },
    {
      id: 2,
      name: 'About us',
      path: 'about-us',
      parent: 0,
    },
    {
      id: 3,
      name: 'Products',
      path: 'product',
      parent: 0,
    },
    {
      id: 4,
      name: 'Fashion',
      path: 'fashion',
      parent: 3,
    },
    {
      id: 5,
      name: 'Jewelry',
      path: 'jewelry',
      parent: 3,
    },
    {
      id: 6,
      name: 'Contact',
      path: 'contact',
      parent: 0,
    },
  ];

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
