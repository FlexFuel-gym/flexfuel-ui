import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from '../../core/services/training.service';
import { Exercise } from '../../core/interfaces';

@Component({
  selector: 'app-plan-training-page',
  templateUrl: './plan-training-page.component.html',
  styleUrls: ['./plan-training-page.component.scss']
})
export class PlanTrainingPageComponent implements OnDestroy {
  public exercises: Exercise[];
  public timer: string;
  public percent: number;
  public playPauseImagePath: string;

  private isTimerActiveSubscription: Subscription;
  private exercisesSubscription: Subscription;
  private timerSubscription: Subscription;

  constructor(private trainingService: TrainingService) {
    this.isTimerActiveSubscription = this.trainingService.isTimerActive$.subscribe({
      next: (isTimerActive: boolean) => {
        this.playPauseImagePath = '/assets/icons/' + (isTimerActive ? 'pause' : 'play') + '.png';
      }
    });

    this.exercisesSubscription = this.trainingService.exercises$.subscribe({
      next: (exercises: Exercise[]) => {
        this.exercises = exercises;
      }
    });

    this.timerSubscription = this.trainingService.timer$.subscribe({
      next: (timer: number) => {
        this.timer = timer.toString();

        if (this.exercises[0]?.seconds) {
          this.percent = (timer / this.exercises[0].seconds) * 100;
        }
      }
    });
  }

  ngOnDestroy() {
    this.isTimerActiveSubscription.unsubscribe();
    this.exercisesSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }

  public getOpacity(index: number) {
    return 1 - ((index * 2) / 10);
  }

  public handleStartStopTimer() {
    this.trainingService.handleStartStopTimer();
  }
}
