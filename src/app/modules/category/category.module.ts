import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoriesComponent, NewCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CategoryModule {}
