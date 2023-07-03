import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { CategoryTypeComponent } from './components/category-type/category-type.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CategoriesComponent,
    NewCategoryComponent,
    CategoryTypeComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
  ],
})
export class CategoryModule {}
