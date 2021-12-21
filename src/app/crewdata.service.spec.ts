import { TestBed } from '@angular/core/testing';

import { CrewdataService } from './crewdata.service';

describe('CrewdataService', () => {
  let service: CrewdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrewdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
