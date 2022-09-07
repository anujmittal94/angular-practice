import { TestBed } from '@angular/core/testing';

import { SpaceApiService } from './space-api.service';

describe('SpaceApiService', () => {
  let service: SpaceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
