import { TestBed, inject } from '@angular/core/testing';
import { DemoService } from './demo.service';

describe('DemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoService]
    });
  });

  it('should be created', inject([DemoService], (service: DemoService) => {
    expect(service).toBeTruthy();
  }));

  it('should return data', inject([DemoService], (service: DemoService) => {
    expect(service.getDemoData()).toBe('Demo data');
  }));
});
