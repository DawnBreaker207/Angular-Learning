import { Component, Input } from '@angular/core';
import { Menus } from '../../../interface/Menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // @Input() menus: any;
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
  checkChildren = (menuId: number): boolean => {
    let check: boolean = false;

    for (const item of this.menus) {
      if (item.parent === menuId) {
        check = true;
      }
    }
    return check;
  };
}
