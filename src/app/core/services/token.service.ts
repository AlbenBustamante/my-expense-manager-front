import { Injectable } from '@angular/core';
import { setCookie, getCookie } from 'typescript-cookie';

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
}
