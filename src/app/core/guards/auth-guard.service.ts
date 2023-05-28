import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private tokenService: TokenService, private router: Router) {}

  public canActivateWithoutAuth(): boolean {
    if (!this.tokenService.get()) {
      alert(`You don't have permissions.`);
      this.router.navigateByUrl('/auth/login');

      return false;
    }

    return true;
  }

  public canActivateWithAuth(): boolean {
    if (this.tokenService.get()) {
      alert(`please come back`);
      this.router.navigateByUrl('/');

      return false;
    }

    return true;
  }
}
