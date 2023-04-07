import {Pipe, PipeTransform} from '@angular/core';
import {CoachSchedule} from "../interfaces";

@Pipe({
  name: 'coachSchedule'
})
export class CoachSchedulePipe implements PipeTransform {

  transform(schedule: CoachSchedule[], ...args: unknown[]): unknown {
    return schedule.reduce((acc: any, item: CoachSchedule) => {
      const itemMin: string = item.periodOfTime.split('-')[0].trim()
      const itemMax: string = item.periodOfTime.split('-')[1].trim()

      const min: number = +itemMin.split(':').join('')
      const max: number = +itemMax.split(':').join('')

      const minStored = +acc[0].split(':').join('')
      const maxStored = +acc[1].split(':').join('')

      if (minStored > min) {
        acc[0] = itemMin
      }

      if (maxStored < max) {
        acc[1] = itemMax
      }

      return acc
    }, ['99:99', '00:00']).join(' - ')
  }

}
