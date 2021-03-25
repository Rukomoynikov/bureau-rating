import {StudentWithAddings} from "../types/api";
import { computed, ComputedRef, Ref } from 'vue'

export function useWeeksAverage (students: Ref<StudentWithAddings[]>): ComputedRef<{[key: string]: number}> {
  const MAXIMUM_WEEKS_AMOUNT = 16
  const averageWeekValues = computed<{[key: string]: number}>(() => {
    if (!students.value.length) {
      return {}
    }

    const averages: {[key: number]: number } = {}

    for(let weekIndex = MAXIMUM_WEEKS_AMOUNT; weekIndex > 0; weekIndex--) {
      let thatWeekStudents = students.value.filter(student => student.weeks.length >= weekIndex)
      let weekAverage = thatWeekStudents
        .map((student) => {
          if (!student.weeks[weekIndex - 1]) {
            return  0
          }
          return student.weeks[weekIndex - 1].weekSummScore
        })
        .reduce((previousValue, nextValue) => {
          return previousValue + nextValue
        }, 0) / thatWeekStudents.length

      averages[weekIndex] = Math.floor(weekAverage)
    }

    return averages
  })

 return averageWeekValues
}
