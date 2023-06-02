import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  UsersCategoryRequest,
  UsersCategoryResponse,
} from '../models/category.model';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url: string = `${environment.apiUrl}/users`;

  constructor(
    private readonly http: HttpClient,
    private readonly tokenService: TokenService
  ) {}

  public addCategory(
    req: UsersCategoryRequest
  ): Observable<UsersCategoryResponse> {
    return this.http.post<UsersCategoryResponse>(`${this.url}/add-category`, {
      ...req,
      userId: this.tokenService.getInfo().id,
    });
  }
}
