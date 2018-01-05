import { TestBed, inject } from '@angular/core/testing';

import { BackendApiServiceService } from './backend-api-service.service';

describe('BackendApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendApiServiceService]
    });
  });

  it('should be created', inject([BackendApiServiceService], (service: BackendApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
