import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanExercisesPageComponent } from './plan-exercises-page.component';

describe('PlanExercisesPageComponent', () => {
  let component: PlanExercisesPageComponent;
  let fixture: ComponentFixture<PlanExercisesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanExercisesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanExercisesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
