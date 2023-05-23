import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    usernameOrEmailOrPhone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private service: AuthService, private router: Router) {}

  public login(): void {
    this.service
      .logIn(this.loginForm.value)
      .subscribe((result) => console.log(result));
  }

  public goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
