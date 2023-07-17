import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  ICategoryRegister,
  IUsersCategoryRequest,
  IUsersCategoryResponse,
} from '../models/category.model';
import { Observable, lastValueFrom } from 'rxjs';
import { TokenService } from './token.service';
import { IUserResponse } from '../models/user.model';
import { IReportResponse } from '../models/report.model';
import { CategoryType } from '../utils/enums';
import { ITransactionResponse } from '../models/transaction.model';

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
    req: ICategoryRegister
  ): Observable<IUsersCategoryResponse> {
    return this.http.post<IUsersCategoryResponse>(`${this.url}/add-category`, {
      userId: this.tokenService.getInfo().id,
      category: { ...req },
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

  public async getUserCategories(
    type: CategoryType
  ): Promise<IUsersCategoryResponse[]> {
    const user = await lastValueFrom(this.getUser());

    return user.categories.filter(
      (category) => category.category.type === type
    );
  }

  public getTransactions(): Observable<ITransactionResponse[]> {
    return this.http.get<ITransactionResponse[]>(
      `${this.url}/${this.tokenService.getInfo().id}/transactions`
    );
  }
}
