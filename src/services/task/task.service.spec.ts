/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('FaqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should ...', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
