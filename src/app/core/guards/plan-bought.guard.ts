import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { SubscriptionPlanService } from '../services/subscription-plan.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PlanBoughtGuard implements CanActivate {
  constructor(
    private subscriptionPlanService: SubscriptionPlanService,
    private router: Router,
    private toastrService: ToastrService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.subscriptionPlanService.isPaymentSuccess().pipe(
      map((isPaymentSuccess: boolean) => {
        if (!isPaymentSuccess) {
          this.toastrService.error('У вас немає підписки =(');
          this.router.navigate(['']);
        }
        return isPaymentSuccess;
      }),
      catchError(() => {
        this.toastrService.error('У вас немає підписки =(');
        this.router.navigate(['']);
        return of(false);
      })
    );
  }
}
