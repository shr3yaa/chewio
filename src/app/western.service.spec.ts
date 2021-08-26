import { TestBed } from '@angular/core/testing';

import { WesternService } from './western.service';

describe('WesternService', () => {
  let service: WesternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WesternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
