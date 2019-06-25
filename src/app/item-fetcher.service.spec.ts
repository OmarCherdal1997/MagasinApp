import { TestBed } from '@angular/core/testing';

import { ItemFetcherService } from './item-fetcher.service';

describe('ItemFetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemFetcherService = TestBed.get(ItemFetcherService);
    expect(service).toBeTruthy();
  });
});
