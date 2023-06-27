import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { IUsersCategoryResponse } from 'src/app/core/models/category.model';
import { ITransactionRegister } from 'src/app/core/models/transaction.model';
import { TransactionService } from 'src/app/core/services/transaction.service';
import { UserService } from 'src/app/core/services/user.service';
import { AppBaseComponent } from 'src/app/core/utils/app-base.component';
import { CategoryType } from 'src/app/core/utils/enums';

@Component({
  selector: 'app-new-record-form',
  templateUrl: './new-record-form.component.html',
  styleUrls: ['./new-record-form.component.css'],
})
export class NewRecordFormComponent extends AppBaseComponent implements OnInit {
  public categories!: IUsersCategoryResponse[];
  public form: FormGroup;
  public readonly nothing: string = 'nothing';
  @Input() public type: CategoryType = CategoryType.EXPENSE;

  constructor(
    private readonly userService: UserService,
    private readonly transactionService: TransactionService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    super();

    this.form = this.fb.group({
      categoryName: [this.nothing, Validators.required],
      description: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    this.categories = await this.userService.getUserCategories(this.type);
  }

  public async doSubmit(): Promise<void> {
    if (this.form.invalid || this.form.value.categoryName === this.nothing) {
      return this.form.markAllAsTouched();
    }

    const transaction: ITransactionRegister = {
      ...this.form.value,
      category: {
        name: this.form.value.categoryName,
        type: this.type,
      },
    };

    await lastValueFrom(this.transactionService.register(transaction));

    this.router.navigateByUrl('/home');
  }

  public getErrorForm(): string {
    return '';
  }
}
