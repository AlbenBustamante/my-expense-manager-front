import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { AppBaseComponent } from 'src/app/core/utils/app-base.component';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
})
export class NewCategoryComponent extends AppBaseComponent {
  public form: FormGroup;

  constructor(
    private readonly userService: UserService,
    private readonly fb: FormBuilder
  ) {
    super();
    this.form = this.fb.group({
      categoryName: ['', Validators.required],
    });
  }

  public async addCategory(): Promise<void> {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    await lastValueFrom(this.userService.addCategory(this.form.value));
  }

  public getErrorForm(field: string): string {
    if (this.isTouchedField(this.form, field)) {
      if (this.form.get(field)?.hasError('required')) {
        return 'This field is required.';
      }
    }

    return '';
  }
}
