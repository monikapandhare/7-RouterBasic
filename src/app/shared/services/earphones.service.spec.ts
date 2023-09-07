import { TestBed } from '@angular/core/testing';

import { EarphonesService } from './earphones.service';

describe('EarphonesService', () => {
  let service: EarphonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarphonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
