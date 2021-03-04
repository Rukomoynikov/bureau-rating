<template>
  <div>
    <h1>Студенты тринадцатого потока</h1>
    <Header v-model:selectedChart="selectedChart" />
    <WeeksHeader />
    <WeeklyRating :weeks="weeks" :students="students" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WeeksHeader from './WeeksHeader.vue'
import Header from './Header.vue'
import WeeklyRating from './WeeklyRating.vue'

export default defineComponent({
  data () {
    return {
      selectedChart: "weekly"
    }
  },
  components: { WeeksHeader, Header, WeeklyRating },
  props: {
    students: Array,
    weeks: Object
  }
})
</script>
