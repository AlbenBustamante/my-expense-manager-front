import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  ITransactionRegister,
  ITransactionResponse,
} from '../models/transaction.model';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly url: string = `${environment.apiUrl}/transactions`;

  constructor(
    private readonly http: HttpClient,
    private readonly tokenService: TokenService
  ) {}

  public register(req: ITransactionRegister): Observable<ITransactionResponse> {
    return this.http.post<ITransactionResponse>(`${this.url}`, {
      ...req,
      userId: this.tokenService.getInfo().id,
    });
  }

  public getAllByUser(): Observable<ITransactionResponse[]> {
    return this.http.get<ITransactionResponse[]>(
      `${this.url}/user/${this.tokenService.getInfo().id}`
    );
  }
}
