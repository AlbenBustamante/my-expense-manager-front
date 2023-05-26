import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(
    private service: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      usernameOrEmailOrPhone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public login(): void {
    this.service
      .logIn(this.loginForm.value)
      .subscribe((result) => console.log(result));
  }

  public goToRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}
