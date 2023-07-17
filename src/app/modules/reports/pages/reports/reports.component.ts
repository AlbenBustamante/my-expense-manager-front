import { Component, OnInit } from '@angular/core';
import { ITransactionResponse } from 'src/app/core/models/transaction.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  reports: ITransactionResponse[] = [];

  constructor(private readonly userService: UserService) {}
  ngOnInit(): void {
    this.userService.getTransactions().subscribe((res) => (this.reports = res));
  }

  getReports() {}
}
