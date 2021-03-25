import axios from 'axios'
import {Student, StudentWithAddings} from "../../types/api";

export async function fetchStudents () {
  const MAXIMUM_WEEKS_AMOUNT = 16
  const response = await axios.get('https://bureau.ru/classroom/events/1565/reports/race.json')
  // https://bureau.ru/classroom/events/1589/reports/race.json

  let data: StudentWithAddings[] = response.data
    .map((student: Student) => {
      const weeks = student.weeks.map((week, index) => {
        // Вычисление общего бала за неделю
        const weekSummScore =  week.details
          .map(subject => subject.score)
          .reduce((previousValue, currentValue) => { return previousValue + Math.round(currentValue)}, 0)

        return { ...week, weekSummScore: weekSummScore}
      })

      return { ...student,
        weeks,
        totalScore: student.weeks[student.weeks.length - 1].score // Последняя неделя содержит общее количество очков
      }
    })
    .sort(function(studentPrev: StudentWithAddings, studentNext: StudentWithAddings) {
      return studentNext.totalScore - studentPrev.totalScore
    })

  // Сортировка студентов по неделям. 
  // На основании количества пройденных недель.
  const weeks: { [key: number]: StudentWithAddings[] } = {}

  for(let i = MAXIMUM_WEEKS_AMOUNT; i >= 0; i--) {
    var result = data.filter(student => student.weeks.length == i)
    if(result.length) { weeks[i] = result }
  }

  return { students: data, weeks } 
}