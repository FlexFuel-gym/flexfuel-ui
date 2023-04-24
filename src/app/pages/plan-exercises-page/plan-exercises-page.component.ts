import { Component } from '@angular/core';
import { ExercisesService } from '../../core/services/exercises.service';
import { ButtonData, ExerciseDescription } from '../../core/interfaces';

@Component({
  selector: 'app-plan-exercises-page',
  templateUrl: './plan-exercises-page.component.html',
  styleUrls: ['./plan-exercises-page.component.scss']
})
export class PlanExercisesPageComponent {
  public descriptionsForExercisesForToday: ExerciseDescription[] = [];
  public buttonData: ButtonData = {
    text: 'Розпочати',
    type: 'blue',
    size: 'medium'
  };

  constructor(private exercisesService: ExercisesService) {
    this.exercisesService.getDescriptionsForExercisesForToday().subscribe({
      next: (exercisesDescription: ExerciseDescription[]) => {
        this.descriptionsForExercisesForToday = exercisesDescription;
      }
    });
  }
}
