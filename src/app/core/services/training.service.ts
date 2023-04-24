import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { ExercisesService } from './exercises.service';
import { Exercise } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  /** Exercises for today mean */
  public exercises$: BehaviorSubject<Exercise[]> = new BehaviorSubject<Exercise[]>([]);
  public timer$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public isTimerActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private intervalTimer = interval(1000);
  private interval: Subscription | null;

  constructor(private exercisesService: ExercisesService) {
    this.exercisesService.getExercisesForToday().subscribe({
      next: (exercises: Exercise[]) => {
        this.exercises$.next(exercises);

        if (exercises[0]?.seconds) {
          this.timeLeft = exercises[0].seconds;
          this.startTimer();
        }
      }
    });
  }

  public get timeLeft(): number {
    return this.timer$.value;
  }

  public set timeLeft(time: number) {
    this.timer$.next(time);
  }

  private set isTimerActive(isTimerActive: boolean) {
    this.isTimerActive$.next(isTimerActive);
  }

  public handleStartStopTimer() {
    if (this.interval) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  public nextExercise() {
    console.log('next');

    const updatedExercises = this.exercises$.value;
    updatedExercises.shift();
    this.exercises$.next(updatedExercises);

    if (updatedExercises[0].seconds) {
      this.timeLeft = updatedExercises[0].seconds;
    } else {
      this.stopTimer();
    }
  }

  public startTimer() {
    if (this.interval != null) {
      console.log('already started!');
      return;
    }

    this.isTimerActive = true;

    this.interval = this.intervalTimer.subscribe({
      next: () => {
        if (this.timeLeft <= 0) {
          this.nextExercise();
          return;
        }

        this.timeLeft -= 1;
      }
    });
  }

  public stopTimer() {
    console.log('stop');
    this.isTimerActive = false;
    this.interval?.unsubscribe();
    this.interval = null;
  }
}
