import { Component } from '@angular/core';
import { MenuItems } from 'src/app/core/models/menu.model';

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
      title: 'Expenses',
      showSubMenu: false,
      icon: 'money_off',
      subMenuItems: [
        { title: 'Add new record', icon: 'add' },
        { title: 'Categories', icon: 'list' },
      ],
    },
    {
      title: 'Incomes',
      showSubMenu: false,
      icon: 'attach_money',
      subMenuItems: [
        { title: 'Add new record', icon: 'add' },
        { title: 'Categories', icon: 'list', space: true },
      ],
      space: true,
    },
    { title: 'Profile', route: '/my', icon: 'account_circle' },
    { title: 'Settings', route: '/my/settings', icon: 'settings' },
    { title: 'Logout', icon: 'exit_to_app' },
  ];

  setShowSubMenu(index: number): void {
    this.menuItems[index].showSubMenu = !this.menuItems[index].showSubMenu;
  }
}
