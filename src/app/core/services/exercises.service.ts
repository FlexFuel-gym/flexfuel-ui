import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { Exercise, ExerciseDescription } from '../interfaces';
import { EXERCISES_IDS } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  constructor(private http: HttpClient) {
  }

  public getDescriptionsForExercisesForToday(): Observable<ExerciseDescription[]> {
    return forkJoin([this.getExercisesForToday(), this.getExercisesDescriptionsRequest()]).pipe(
      map(([exercisesForToday, exercisesDescription]) => {
        return this.filterDescriptionsForExercisesForTodayWithAmount(exercisesForToday, exercisesDescription);
      })
    );
  }

  public getExercisesForToday(): Observable<Exercise[]> {
    return this.getExercisesRequest().pipe(
      map((response: Exercise[][]) => {
        const weekDayNumber = new Date().getDay();
        return response[weekDayNumber];
      })
    );
  }

  private filterDescriptionsForExercisesForTodayWithAmount(
    exercisesForToday: Exercise[],
    exercisesDescription: ExerciseDescription[]
  ): ExerciseDescription[] {
    const calculateAverage = (averageCountOrSeconds: number, repeats: number, countOrSeconds: number) => {
      return (averageCountOrSeconds * repeats + countOrSeconds) / (repeats + 1);
    };

    const data = exercisesForToday.reduce((acc: any, exercise: Exercise) => {
      // Skip breaks
      if (exercise.id === EXERCISES_IDS.BREAK) {
        return acc;
      }

      const isExist = acc[exercise.id];
      const countOrSeconds: number = exercise.count! || exercise.seconds!;
      if (isExist) {
        acc[exercise.id].averageCountOrSeconds = calculateAverage(acc[exercise.id].averageCountOrSeconds, acc[exercise.id].repeats, countOrSeconds);
        acc[exercise.id].repeats += 1;
      } else {
        acc[exercise.id] = { repeats: 1, averageCountOrSeconds: countOrSeconds };
      }

      return acc;
    }, {});

    const exercisesDescriptionObj = exercisesDescription.reduce((acc: any, exercise: Exercise) => {
      acc[exercise.id] = exercise;
      return acc;
    }, {});

    return Object.entries(data).reduce((acc: any, [key, item]: any) => {
      acc.push({
        ...item, ...exercisesDescriptionObj[key],
        averageCountOrSeconds: Math.round(item.averageCountOrSeconds)
      });
      return acc;
    }, []);
  }

  private getExercisesRequest(): Observable<Exercise[][]> {
    return this.http.get<Exercise[][]>('assets/storage/training.json');
  }

  private getExercisesDescriptionsRequest(): Observable<ExerciseDescription[]> {
    return this.http.get<ExerciseDescription[]>('assets/storage/training-description.json');
  }
}
