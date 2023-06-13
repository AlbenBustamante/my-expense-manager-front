import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  IUsersCategoryRequest,
  IUsersCategoryResponse,
} from '../models/category.model';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { IUserResponse } from '../models/user.model';
import { IReportResponse } from '../models/report.model';

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
    req: IUsersCategoryRequest
  ): Observable<IUsersCategoryResponse> {
    return this.http.post<IUsersCategoryResponse>(`${this.url}/add-category`, {
      ...req,
      userId: this.tokenService.getInfo().id,
    });
  }

  public getUser(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(
      `${this.url}/${this.tokenService.getInfo().id}`
    );
  }

  public getReports(): Observable<IReportResponse> {
    return this.http.get<IReportResponse>(
      `${this.url}/${this.tokenService.getInfo().id}/reports`
    );
  }
}
