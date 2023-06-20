import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { NewRecordFormComponent } from './components/new-record-form/new-record-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewExpenseComponent } from './pages/new-expense/new-expense.component';
import { NewIncomeComponent } from './pages/new-income/new-income.component';

@NgModule({
  declarations: [
    NewRecordFormComponent,
    NewExpenseComponent,
    NewIncomeComponent,
  ],
  imports: [
    CommonModule,
    RecordRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class RecordModule {}
