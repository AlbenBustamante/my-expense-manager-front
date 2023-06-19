import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly tokenService: TokenService,
    private readonly router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.get();

    if (!token) {
      return next.handle(request);
    }

    const authRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(authRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403 || error.status === 401) {
          Swal.fire({
            title: `Oops...`,
            text: `You don't have permissions.`,
            icon: 'error',
          });

          this.tokenService.delete();
          this.router.navigateByUrl('/auth/login');
        }

        return throwError(() => error);
      })
    );
  }
}
