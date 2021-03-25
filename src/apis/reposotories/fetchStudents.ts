import axios from 'axios'
import {Student, StudentWithAddings} from "../../types/api";

export async function fetchStudents () {
  const MAXIMUM_WEEKS_AMOUNT = 16
  const response = await axios.get('https://bureau.ru/classroom/events/1565/reports/race.json')
  // https://bureau.ru/classroom/events/1589/reports/race.json

  // Подсчет общего рейтинга для каждого студента
  let data: StudentWithAddings[] = response.data
    .map((student: Student) => {
      return { ...student, totalScore: student.weeks[student.weeks.length - 1].score }
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