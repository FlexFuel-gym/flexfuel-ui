import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from '../../core/interfaces';

@Pipe({
  name: 'exercise'
})
export class ExercisePipe implements PipeTransform {

  transform(exercise: Exercise, ...args: unknown[]): unknown {
    return exercise.seconds ? exercise.seconds + ' сек' : exercise.count + ' раз';
  }

}
