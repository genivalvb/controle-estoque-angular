import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogfutureListComponent } from './logfuture-list.component';

describe('LogfutureListComponent', () => {
  let component: LogfutureListComponent;
  let fixture: ComponentFixture<LogfutureListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogfutureListComponent]
    });
    fixture = TestBed.createComponent(LogfutureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
