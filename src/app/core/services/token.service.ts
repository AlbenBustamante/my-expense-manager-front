import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { setCookie, getCookie } from 'typescript-cookie';
import { IJwtResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  public save(token: string): void {
    setCookie('token', token, { expires: 1, path: '/' });
  }

  public get(): string | undefined {
    return getCookie('token');
  }

  public getInfo(): IJwtResponse {
    const token = getCookie('token');
    return jwtDecode(token ?? '');
  }
}
