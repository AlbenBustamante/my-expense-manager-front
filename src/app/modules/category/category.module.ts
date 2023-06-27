import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpenseCategoriesComponent } from './pages/expense-categories/expense-categories.component';
import { IncomeCategoriesComponent } from './pages/income-categories/income-categories.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    ExpenseCategoriesComponent,
    IncomeCategoriesComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CategoryModule {}
