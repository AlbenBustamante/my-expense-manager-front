import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuardService {
  constructor(private tokenService: TokenService, private router: Router) {}

  public redirectGuard(): boolean {
    if (this.tokenService.get()) {
      return true;
    }

    this.router.navigateByUrl('/auth/login');

    return false;
  }

  public authGuard(): boolean {
    if (!this.tokenService.get()) {
      return true;
    }

    this.router.navigateByUrl('/');

    return false;
  }
}
