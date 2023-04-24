import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTrainingPageComponent } from './plan-training-page.component';

describe('PlanTrainingPageComponent', () => {
  let component: PlanTrainingPageComponent;
  let fixture: ComponentFixture<PlanTrainingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanTrainingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanTrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
