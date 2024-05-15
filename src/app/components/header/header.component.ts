import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() menus: any;
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
