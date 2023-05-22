import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  days: number[] = [];
  months: number[] = [];
  years: number[] = [];

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthday: new FormControl(''),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
  });

  constructor(private service: AuthService) {}

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

  public register(): void {
    this.registerForm.value.birthday = '01/01/2001';

    this.service
      .register(this.registerForm.value)
      .subscribe((result) => console.log(result));
  }
}
