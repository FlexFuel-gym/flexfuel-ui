import { TestBed } from '@angular/core/testing';

import { AdditionalService } from '../additional.service';

describe('AdditionalService', () => {
  let service: AdditionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('scrollTop()', () => {
    let scrollSpy: jasmine.Spy;

    beforeEach(() => {
      scrollSpy = spyOn(window, 'scroll');
    });

    it('should scroll to top', () => {
      scrollSpy.and.returnValue(undefined);

      service.scrollTop();
      expect(scrollSpy).toHaveBeenCalledOnceWith({ top: 0 });
    });
  });
});
