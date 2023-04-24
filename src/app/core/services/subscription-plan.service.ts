import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { nanoid } from 'nanoid';
import { LOCAL_STORAGE } from '../enums';
import { MonobankResponse, Response } from '../interfaces';
import { MonobankService } from './monobank.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionPlanService {
  /** planKey$ changes every time when user active other payed key from other device */
  public planKey$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private monobankService: MonobankService) {
    if (!this.planKey) {
      this.planKey = nanoid();
    }

    this.planKey$.next(this.planKey);
  }

  public get planKey(): string {
    const planKey = localStorage.getItem(LOCAL_STORAGE.PLAN_KEY);

    if (planKey) {
      return JSON.parse(planKey);
    }

    return '';
  }

  public set planKey(planKey: string) {
    this.planKey$.next(planKey);
    localStorage.setItem(LOCAL_STORAGE.PLAN_KEY, JSON.stringify(planKey));
  }

  public isPaymentSuccess(activationCode: string = this.planKey): Observable<boolean> {
    return this.monobankService.getTransactionRequest(activationCode)
      .pipe(
        map((transaction: Response<MonobankResponse>) => transaction != null),
        catchError(() => of(false))
      );
  }
}
