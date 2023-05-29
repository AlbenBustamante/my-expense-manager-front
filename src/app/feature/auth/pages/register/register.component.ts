import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppBaseComponent } from 'src/app/core/utils/app-base.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent extends AppBaseComponent {
  days: number[] = [];
  months: number[] = [];
  years: number[] = [];
  registered: boolean = false;
  title: string = 'Sign Up';

  public registerForm: FormGroup;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    super();
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: [''],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }

    for (let i = 1; i <= 12; i++) {
      this.months.push(i);
    }

    for (let i = 1910; i <= 2023; i++) {
      this.years.push(i);
    }
  }

  public async register(): Promise<void> {
    this.registerForm.value.birthday = '01/01/2001';

    if (this.registerForm.invalid) {
      return this.registerForm.markAllAsTouched();
    }

    await lastValueFrom(this.service.register(this.registerForm.value));

    this.registered = true;
    this.title = 'Successful registration';
  }

  public getErrorMessage(field: string): string {
    const required: string[] = [
      'name',
      'lastName',
      'username',
      'email',
      'phone',
      'password',
      'repeatPassword',
      'gender',
    ];

    if (this.isTouchedField(this.registerForm, field)) {
      if (
        required.includes(field) &&
        this.registerForm.get(field)?.hasError('required')
      ) {
        return 'This field is required';
      }
    }

    return '';
  }

  public goToLogIn(): void {
    this.router.navigateByUrl('/auth/login');
  }
}
