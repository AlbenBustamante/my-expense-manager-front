import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryType } from 'src/app/core/utils/enums';

@Component({
  selector: 'app-category-type',
  templateUrl: './category-type.component.html',
  styleUrls: ['./category-type.component.css'],
})
export class CategoryTypeComponent {
  type: CategoryType = CategoryType.EXPENSE;
}
