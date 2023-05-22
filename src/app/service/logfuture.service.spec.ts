import { TestBed } from '@angular/core/testing';

import { LogfutureService } from './logfuture.service';

describe('LogfutureService', () => {
  let service: LogfutureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogfutureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
