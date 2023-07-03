import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryTypeComponent } from '../category-type/category-type.component';
import { CategoryType } from 'src/app/core/utils/enums';
import { ICategoryRegister } from 'src/app/core/models/category.model';
import { UserService } from 'src/app/core/services/user.service';
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
})
export class NewCategoryComponent {
  category: ICategoryRegister = { name: '', type: CategoryType.EXPENSE };

  constructor(
    private readonly dialog: MatDialog,
    private readonly userService: UserService
  ) {}

  openDialog() {
    const selectedType = this.dialog.open(CategoryTypeComponent, {
      data: { type: this.category.type },
    });

    selectedType.afterClosed().subscribe((result) => {
      this.category.type = result;

      if (this.category.name != (undefined || '')) {
        this.userService.addCategory(this.category).subscribe();
        this.category.name = '';

        Swal.fire({
          title: 'Successful registration!',
          text: 'The category was successfully saved',
          icon: 'success',
        });
      }
    });
  }
}
