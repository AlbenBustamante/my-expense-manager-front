import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { setCookie, getCookie, removeCookie } from 'typescript-cookie';
import { IJwtResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly cookie: string = 'token';

  constructor() {}

  public save(token: string): void {
    setCookie(this.cookie, token, { expires: 1, path: '/' });
  }

  public get(): string | undefined {
    return getCookie(this.cookie);
  }

  public delete(): void {
    removeCookie(this.cookie);
  }

  public getInfo(): IJwtResponse {
    const token = getCookie(this.cookie);
    return jwtDecode(token ?? '');
  }
}
