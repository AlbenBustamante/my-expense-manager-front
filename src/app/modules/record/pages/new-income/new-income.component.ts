import { Component } from '@angular/core';
import { CategoryType } from 'src/app/core/utils/enums';

@Component({
  selector: 'app-new-income',
  templateUrl: './new-income.component.html',
  styleUrls: ['./new-income.component.css'],
})
export class NewIncomeComponent {
  readonly type: CategoryType = CategoryType.INCOME;
}
