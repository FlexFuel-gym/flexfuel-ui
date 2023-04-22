import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { CoachData, CoachResponse, RegisterToCoachResponse, Response } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoachesService {
  coaches$: BehaviorSubject<CoachData[]> = new BehaviorSubject<CoachData[]>([]);

  constructor(private http: HttpClient, private environmentService: EnvironmentService) {
    this.getCoaches();
  }

  public registerToCoach(coachId: string, customerData: any) {
    this.registerToCoachRequest(coachId, customerData).subscribe({
      next: (response: Response<RegisterToCoachResponse>) => {
        if (response.success) {
          console.log('Success');
        }
      }
    });
  }

  private getCoaches() {
    return this.getCoachesRequest().subscribe({
      next: (response: Response<CoachResponse>) => {
        this.coaches$.next(response.data.coaches);
      }
    });
  }

  private getCoachesRequest(): Observable<Response<CoachResponse>> {
    return this.http.get<Response<CoachResponse>>(`${this.environmentService.environment.apiUrl}/coach/get-coaches`);
  }

  private registerToCoachRequest(coachId: string, customerData: any): Observable<Response<RegisterToCoachResponse>> {
    return this.http.post<Response<RegisterToCoachResponse>>(`${this.environmentService.environment.apiUrl}/coach/register-to-coach`, {
      coachId,
      customerData
    });
  }
}
