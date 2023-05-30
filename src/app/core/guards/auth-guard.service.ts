import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private tokenService: TokenService, private router: Router) {}

  public canActivateWithoutAuth(): boolean {
    if (!this.tokenService.get()) {
      Swal.fire({
        title: 'Oops...',
        text: `You don't have permissions.`,
        icon: 'error',
      });

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
