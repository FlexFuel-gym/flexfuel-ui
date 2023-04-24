import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanLineComponent } from './plan-line.component';

describe('PlanLineComponent', () => {
  let component: PlanLineComponent;
  let fixture: ComponentFixture<PlanLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
