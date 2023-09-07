import { TestBed } from '@angular/core/testing';

import { IpodsService } from './ipods.service';

describe('IpodsService', () => {
  let service: IpodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
