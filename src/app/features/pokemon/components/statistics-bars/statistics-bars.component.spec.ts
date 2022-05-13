import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsBarsComponent } from './statistics-bars.component';

describe('StatisticsBarsComponent', () => {
  let component: StatisticsBarsComponent;
  let fixture: ComponentFixture<StatisticsBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
