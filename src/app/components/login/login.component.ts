import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private service: AuthService) {}

  public login(): void {
    this.service
      .logIn(this.loginForm.value)
      .subscribe((result) => console.log(result));
  }
}
