import { TestBed } from '@angular/core/testing';

import { DataInfoPageService } from './data-info-page.service';

describe('DataInfoPageService', () => {
  let service: DataInfoPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataInfoPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
