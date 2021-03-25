<template>
  <div>
    <h1>Студенты тринадцатого потока</h1>
    <Header v-model:selectedChart="selectedChart" />
    <WeeklyRating v-if="selectedChart == 'weekly'" :weeks="weeks" :students="students" />
    <OverallRating v-if="selectedChart == 'all'" :weeks="weeks" :students="students" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Header from './Header.vue'
import OverallRating from './OverallRating/OverallRating.vue'
import WeeklyRating from './WeeklyRating/WeeklyRating.vue'
import {fetchStudents} from "../apis/reposotories/fetchStudents";
import {StudentWithAddings} from "../types/api";

export default defineComponent({
  data () {
    return {
      selectedChart: "weekly"
    }
  },
  components: { Header, WeeklyRating, OverallRating},
  props: {
    students: Array,
    weeks: Object
  },
  setup (props) {
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
})
</script>
