<template>
  <div>
    <h1>Студенты тринадцатого потока</h1>
    <Header v-model:selectedChart="selectedChart" />
    <WeeklyRating v-if="selectedChart == 'weekly'" :weeks="weeks" :students="students" />
    <OverallRating v-if="selectedChart == 'all'" :weeks="weeks" :students="students" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './Header.vue'
import OverallRating from './OverallRating/OverallRating.vue'
import WeeklyRating from './WeeklyRating/WeeklyRating.vue'
import {useStudents} from "../composable/useStudents";
import {useWeeksAverage} from "../composable/useWeeksAverage";

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
    const {students, weeks} = useStudents()
    const weeksAverage = useWeeksAverage(students)

    return { students, weeks, weeksAverage }
  }
})
</script>
