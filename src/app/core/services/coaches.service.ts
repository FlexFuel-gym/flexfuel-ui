import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { CoachData, CoachResponse, Response } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoachesService {
  coaches$: BehaviorSubject<CoachData[]> = new BehaviorSubject<CoachData[]>([]);

  constructor(private http: HttpClient, private environmentService: EnvironmentService) {
    this.getCoaches().subscribe({
      next: (response: Response<CoachResponse>) => {
        this.coaches$.next(response.data.coaches);
      }
    });
  }

  private getCoaches(): Observable<Response<CoachResponse>> {
    return this.http.get<Response<CoachResponse>>(`${this.environmentService.environment.apiUrl}/coach/get-coaches`);
  }
}
