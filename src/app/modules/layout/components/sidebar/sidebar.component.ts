import { Component } from '@angular/core';
import { MenuItem, MenuItems } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  readonly menuItems: MenuItems = [
    {
      title: 'Dashboard',
      route: '/my/dashboard',
      space: true,
      icon: 'dashboard',
    },
    {
      title: 'Add new record',
      icon: 'add',
      route: '/record',
    },
    {
      title: 'Categories',
      space: true,
      icon: 'category',
      route: '/categories',
    },
    { title: 'Reports', space: true, icon: 'list' },
    { title: 'Profile', route: '/my', icon: 'account_circle' },
    { title: 'Settings', route: '/my/settings', icon: 'settings' },
    { title: 'Logout', icon: 'exit_to_app' },
  ];

  setShowSubMenu(index: number): void {
    this.menuItems.forEach((item, i) => {
      item.selected = index === i;

      if (index != i) {
        item.showSubMenu = false;
      }

      item.subMenuItems?.forEach((subItem) => (subItem.selected = false));
    });

    this.menuItems[index].showSubMenu = !this.menuItems[index].showSubMenu;
  }

  setSubMenuSelected(index: number) {
    const item = this.menuItems.find((item) => item.selected === true);
    const subItems = item?.subMenuItems;

    if (subItems) {
      subItems.forEach((subItem, i) => (subItem.selected = index === i));
    }
  }
}
