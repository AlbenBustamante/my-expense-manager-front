import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRegister, IUserResponse } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url: string = 'http://localhost:8084/api/v1/auth';

  constructor(private http: HttpClient) {}

  public register(req: IUserRegister): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(`${this.url}/register`, req);
  }
}
