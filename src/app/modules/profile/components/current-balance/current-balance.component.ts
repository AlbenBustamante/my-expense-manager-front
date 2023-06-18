import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-current-balance',
  templateUrl: './current-balance.component.html',
  styleUrls: ['./current-balance.component.css'],
})
export class CurrentBalanceComponent {
  public currentBalance: string = '0';

  constructor(private readonly userService: UserService) {
    this.userService
      .getReports()
      .subscribe((res) => (this.currentBalance = res.currentBalance));
  }
}
