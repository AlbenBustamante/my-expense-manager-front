import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRegister, IUserResponse } from '../models/user.model';
import { Observable } from 'rxjs';
import { IAuthRequest, IAuthResponse } from '../models/auth.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url: string = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  public register(req: IUserRegister): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(`${this.url}/register`, req);
  }

  public logIn(req: IAuthRequest): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${this.url}/sign-in`, req);
  }
}
