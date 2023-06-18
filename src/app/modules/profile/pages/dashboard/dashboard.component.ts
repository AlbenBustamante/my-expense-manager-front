import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public username: string = '';

  constructor(private readonly userService: UserService) {
    this.userService
      .getUser()
      .subscribe((res) => (this.username = `${res.name} ${res.lastName}`));
  }
}
