import {ref, onMounted } from 'vue'
import {StudentWithAddings} from "../types/api";
import {fetchStudents} from "../apis/reposotories/fetchStudents";

export function useStudents () {
  const students = ref<StudentWithAddings[]>([])
  const weeks = ref<{ [key: number]: StudentWithAddings[] }>({})

  const getStudents = async () => {
    let response = await fetchStudents()
    students.value = response.students
    weeks.value = response.weeks
  }

  onMounted(getStudents)

  return {
    weeks,
    students
  }
}