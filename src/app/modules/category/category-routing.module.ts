import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ExpenseCategoriesComponent } from './pages/expense-categories/expense-categories.component';
import { IncomeCategoriesComponent } from './pages/income-categories/income-categories.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'expenses', component: ExpenseCategoriesComponent },
  { path: 'incomes', component: IncomeCategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
