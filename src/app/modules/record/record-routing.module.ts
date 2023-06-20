import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExpenseComponent } from './pages/new-expense/new-expense.component';
import { NewIncomeComponent } from './pages/new-income/new-income.component';

const routes: Routes = [
  { path: '', redirectTo: 'expense', pathMatch: 'full' },
  { path: 'expense', component: NewExpenseComponent },
  { path: 'income', component: NewIncomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordRoutingModule {}
