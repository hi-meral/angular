import { TestBed } from '@angular/core/testing';

import { PostDateServicesService } from './post-date-services.service';

describe('PostDateServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostDateServicesService = TestBed.get(PostDateServicesService);
    expect(service).toBeTruthy();
  });
});
