import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppBaseComponent } from 'src/app/core/utils/app-base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends AppBaseComponent {
  public loginForm: FormGroup;

  constructor(
    private service: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    super();
    this.loginForm = this.fb.group({
      usernameOrEmailOrPhone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public async login(): Promise<void> {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }

    await lastValueFrom(this.service.logIn(this.loginForm.value));
  }

  public goToRegister(): void {
    this.router.navigate(['/auth/register']);
  }

  public getErrorMessage(field: string): string {
    let message: string = '';

    if (this.isTouchedField(this.loginForm, field)) {
      if (this.loginForm.get(field)?.hasError('required')) {
        message = 'This field is required';
      }
    }

    return message;
  }
}
