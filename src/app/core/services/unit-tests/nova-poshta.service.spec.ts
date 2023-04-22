import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { NovaPoshtaService } from '../nova-poshta.service';
import { EnvironmentService } from '../environment.service';
import { CityInfo, Department, NovaPoshtaResponse, Settlements } from '../../interfaces';
import {
  getSettlementsResponse,
  getWarehousesResponse,
  searchSettlementsResponse
} from './expected-responses/nova-poshta-responses';

describe('NovaPoshtaService', () => {
  let service: NovaPoshtaService;
  let mockHttp: HttpTestingController;

  const mockEnvironmentService = {
    environment: {
      novaposhtaUrl: 'https://flexfuel.onrender.com/api'
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NovaPoshtaService,
        { provide: EnvironmentService, useValue: mockEnvironmentService }
      ],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(NovaPoshtaService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Requests', () => {
    it('getDeliveryAddressesRequest(): should make request', () => {
      (service as any).getDeliveryAddressesRequest().subscribe({
        next: (response: NovaPoshtaResponse<CityInfo[]>) => {
          expect(response).toEqual(getSettlementsResponse);
        }
      });

      expectedRequest('', 'POST', getSettlementsResponse);
    });

    it('getDeliveryDepartmentsRequest(): should make request', () => {
      const cityRef = 'e7147f0f-4b33-11e4-ab6d-005056801329';

      (service as any).getDeliveryDepartmentsRequest(cityRef).subscribe({
        next: (response: NovaPoshtaResponse<Department[]>) => {
          expect(response).toEqual(getWarehousesResponse);
        }
      });

      expectedRequest('', 'POST', getWarehousesResponse);
    });

    it('getDeliveryCityIdRequest(): should make request', () => {
      const ZIPCode = '24400';

      (service as any).getDeliveryCityIdRequest(ZIPCode).subscribe({
        next: (response: NovaPoshtaResponse<Settlements[]>) => {
          expect(response).toEqual(searchSettlementsResponse);
        }
      });

      expectedRequest('', 'POST', searchSettlementsResponse);
    });
  });

  describe('getDeliveryDepartments()', () => {
    let getDeliveryCityIdRequestSpy: jasmine.Spy;
    let getDeliveryDepartmentsRequestSpy: jasmine.Spy;

    beforeEach(() => {
      getDeliveryCityIdRequestSpy = spyOn(service as any, 'getDeliveryCityIdRequest');
      getDeliveryDepartmentsRequestSpy = spyOn(service as any, 'getDeliveryDepartmentsRequest');

      getDeliveryCityIdRequestSpy.and.returnValue(of(searchSettlementsResponse));
      getDeliveryDepartmentsRequestSpy.and.returnValue(of(getWarehousesResponse));
    });

    it('should set deliveryCityRef and deliveryDepartments', () => {
      const ZIPCode = '24400';

      service.getDeliveryDepartments(ZIPCode);

      expect(service.deliveryCityRef).toEqual('69da417b-3f5d-11de-b509-001d92f78698');
      expect(service.deliveryDepartments$.value).toEqual(getWarehousesResponse.data);
    });
  });

  describe('getDeliveryAddresses()', () => {
    let getDeliveryAddressesRequestSpy: jasmine.Spy;

    beforeEach(() => {
      getDeliveryAddressesRequestSpy = spyOn(service as any, 'getDeliveryAddressesRequest');

      getDeliveryAddressesRequestSpy.and.returnValue(of(getSettlementsResponse));
    });

    it('should set deliveryCityRef and deliveryDepartments', () => {
      const cityName = '';

      service.getDeliveryAddresses(cityName);

      expect(service.deliveryAddresses$.value).toEqual(getSettlementsResponse.data);
    });
  });

  const expectedRequest = (requestLink: string, method: string, responseData: any) => {
    const request = mockHttp.expectOne(mockEnvironmentService.environment.novaposhtaUrl + requestLink);
    expect(request.request.method).toBe(method);
    request.flush(responseData);
  };
});
