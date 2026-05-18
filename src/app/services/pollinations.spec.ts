import { TestBed } from '@angular/core/testing';

import { Pollinations } from './pollinations.service';

describe('Pollinations', () => {
  let service: Pollinations;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pollinations);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
