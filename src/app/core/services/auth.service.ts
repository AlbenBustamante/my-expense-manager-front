import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRegister, IUserResponse } from '../models/user.model';
import { Observable, tap } from 'rxjs';
import { IAuthRequest, IAuthResponse } from '../models/auth.model';
import { environment } from 'src/environments/environment.development';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url: string = `${environment.apiUrl}/auth`;

  constructor(
    private readonly http: HttpClient,
    private readonly tokenService: TokenService
  ) {}

  public register(req: IUserRegister): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(`${this.url}/register`, req);
  }

  public logIn(req: IAuthRequest): Observable<IAuthResponse> {
    return this.http
      .post<IAuthResponse>(`${this.url}/sign-in`, req)
      .pipe(tap((res) => this.tokenService.save(res.token)));
  }
}
