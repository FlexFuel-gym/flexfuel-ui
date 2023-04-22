import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoachesService } from '../coaches.service';
import { EnvironmentService } from '../environment.service';
import { CoachResponse, RegisterToCoachResponse, Response } from '../../interfaces';
import { coachGetCoachesResponse, coachRegisterToCoachResponse } from './expected-responses/coaches-responses';

describe('CoachesService', () => {
  let service: CoachesService;
  let mockHttp: HttpTestingController;

  const mockEnvironmentService = {
    environment: {
      apiUrl: 'https://flexfuel.onrender.com/api'
    }
  };

  const requestLinks = {
    coachRegisterToCoach: '/coach/register-to-coach',
    coachGetCoaches: '/coach/get-coaches'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoachesService,
        { provide: EnvironmentService, useValue: mockEnvironmentService }
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CoachesService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Requests', () => {
    it('registerToCoachRequest(): should make request', () => {
      const coachId = '1';
      const customerData = {};

      service.registerToCoachRequest(coachId, customerData).subscribe({
        next: (response: Response<RegisterToCoachResponse>) => {
          expect(response).toEqual(coachRegisterToCoachResponse);
        }
      });

      expectedRequest(requestLinks.coachRegisterToCoach, 'POST', coachRegisterToCoachResponse);
    });

    it('getCoachesRequest(): should make request', () => {
      service.getCoachesRequest().subscribe({
        next: (response: Response<CoachResponse>) => {
          expect(response).toEqual(coachGetCoachesResponse);
        }
      });

      expectedRequest(requestLinks.coachGetCoaches, 'GET', coachGetCoachesResponse);
    });
  });

  const expectedRequest = (requestLink: string, method: string, responseData: any) => {
    const request = mockHttp.expectOne(mockEnvironmentService.environment.apiUrl + requestLink);
    expect(request.request.method).toBe(method);
    request.flush(responseData);
  };
});
