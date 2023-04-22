import { TestBed } from '@angular/core/testing';

import { NovaPoshtaService } from './nova-poshta.service';

describe('NovaPoshtaService', () => {
  let service: NovaPoshtaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovaPoshtaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
