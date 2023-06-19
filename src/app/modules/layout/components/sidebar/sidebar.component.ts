import { Component } from '@angular/core';
import { MenuItems } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  readonly menuItems: MenuItems = [
    { title: 'Dashboard', route: '/my/dashboard', space: true },
    {
      title: 'Expenses',
      showSubMenu: false,
      subMenuItems: [{ title: 'Add new record' }, { title: 'Categories' }],
    },
    {
      title: 'Incomes',
      showSubMenu: false,
      subMenuItems: [
        { title: 'Add new record' },
        { title: 'Categories', space: true },
      ],
      space: true,
    },
    { title: 'Profile', route: '/my' },
    { title: 'Settings', route: '/my/settings' },
    { title: 'Logout' },
  ];

  setShowSubMenu(index: number): void {
    this.menuItems[index].showSubMenu = !this.menuItems[index].showSubMenu;
  }
}
