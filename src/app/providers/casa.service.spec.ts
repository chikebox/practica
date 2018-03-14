import { TestBed, inject } from '@angular/core/testing';

import { CasaService } from './casa.service';

describe('CasaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CasaService]
    });
  });

  it('should be created', inject([CasaService], (service: CasaService) => {
    expect(service).toBeTruthy();
  }));
});
