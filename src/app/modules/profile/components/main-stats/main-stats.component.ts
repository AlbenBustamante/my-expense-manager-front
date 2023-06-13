import { Component } from '@angular/core';
import { IReportResponse } from 'src/app/core/models/report.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-main-stats',
  templateUrl: './main-stats.component.html',
  styleUrls: ['./main-stats.component.css'],
})
export class MainStatsComponent {
  public stats: IReportResponse = {
    totalCategories: 0,
    totalTransactions: 0,
    totalExpenses: '$ 0',
    totalIncomes: '$ 0',
  };

  constructor(private readonly userService: UserService) {
    this.userService.getReports().subscribe((result) => (this.stats = result));
  }
}
