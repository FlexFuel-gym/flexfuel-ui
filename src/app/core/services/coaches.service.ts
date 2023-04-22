import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { CoachResponse, RegisterToCoachResponse, Response } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoachesService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {
  }

  public registerToCoachRequest(coachId: string, customerData: any): Observable<Response<RegisterToCoachResponse>> {
    return this.http.post<Response<RegisterToCoachResponse>>(`${this.environmentService.environment.apiUrl}/coach/register-to-coach`, {
      coachId,
      customerData
    });
  }

  public getCoachesRequest(): Observable<Response<CoachResponse>> {
    return this.http.get<Response<CoachResponse>>(`${this.environmentService.environment.apiUrl}/coach/get-coaches`);
  }
}
