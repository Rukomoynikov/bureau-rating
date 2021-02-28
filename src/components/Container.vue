<template>
  <div>
    <h1>Студенты тринадцатого потока</h1>

    <WeeksLine />

    <div v-for="weekNumber in weekNumbers" class="week">
      <h2>Неделя {{weekNumber}}</h2>

      <div v-for="student in weeks[weekNumber]" class="student">
        <StudentWeeks :weeks="student.weeks" />
        <StudentSummary :student="student" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import StudentSummary from './StudentSummary.vue'
import StudentWeeks from './StudentWeeks.vue'
import WeeksLine from './WeeksLine.vue'

export default defineComponent({
  name: 'Container',
  components: { StudentSummary, StudentWeeks, WeeksLine },
  data() {
    return {
      students: [],
      weeks: []
    }
  },
  async mounted() {
    const response = await axios.get('https://bureau.ru/classroom/events/1565/reports/race.json')

    const weeks = {}


    // Сортировка студентов по неделям. 
    // На основании количества пройденных недель.
    for(let i = 16; i >= 0; i--) {
      const result = response
        .data
        .filter(student => student.weeks.length == i)

      if(result.length) { weeks[i] = result }
    }
  
    this.students = response.data
    this.weeks = weeks
  },
  computed: {
    weekNumbers() {
      return Object.keys(this.weeks).reverse()
    }
  }
})
</script>

<style scoped>
.week {
  margin-bottom: 20px;
}

.student {
  display: flex;
  margin-bottom: 8px;
}

.student:hover {
  background: yellow;
}
</style>