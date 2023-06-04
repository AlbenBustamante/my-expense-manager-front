import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { IUsersCategoryResponse } from 'src/app/core/models/category.model';
import { TransactionService } from 'src/app/core/services/transaction.service';
import { UserService } from 'src/app/core/services/user.service';
import { AppBaseComponent } from 'src/app/core/utils/app-base.component';

@Component({
  selector: 'app-new-record-form',
  templateUrl: './new-record-form.component.html',
  styleUrls: ['./new-record-form.component.css'],
})
export class NewRecordFormComponent extends AppBaseComponent implements OnInit {
  public categories!: IUsersCategoryResponse[];
  public form!: FormGroup;

  constructor(
    private readonly userService: UserService,
    private readonly transactionService: TransactionService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.userService
      .getUser()
      .subscribe((result) => (this.categories = result.categories));

    this.form = this.fb.group({
      categoryName: [Validators.required],
      description: ['', Validators.required],
      value: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  public async doSubmit(): Promise<void> {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    await lastValueFrom(this.transactionService.register(this.form.value));

    this.router.navigateByUrl('/home');
  }

  public getErrorForm(): string {
    return '';
  }
}
