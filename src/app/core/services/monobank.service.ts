import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { MonobankResponse, Response } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MonobankService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {
  }

  public getTransactionRequest(transactionId: string): Observable<Response<MonobankResponse>> {
    return this.http.get<Response<MonobankResponse>>(`${this.environmentService.environment.apiUrl}/monobank/transaction`, {
      params: {
        'transaction-id': transactionId
      }
    });
  }
}
