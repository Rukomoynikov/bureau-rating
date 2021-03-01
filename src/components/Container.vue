<template>
  <div>
    <h1>Студенты тринадцатого потока</h1>

    <WeeksLine />

    <div v-for="(weekNumber, index) in weekNumbers" :key="index" class="week">
      <h2>Неделя {{weekNumber}}</h2>

      <div v-for="(student, studentIndex) in weeks[weekNumber]" :key="studentIndex" class="student">
        <StudentWeeks :weeks="student.weeks" />
        <StudentSummary :student="student" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StudentSummary from './StudentSummary.vue'
import StudentWeeks from './StudentWeeks.vue'
import WeeksLine from './WeeksLine.vue'

export default defineComponent({
  name: 'Container',
  components: { StudentSummary, StudentWeeks, WeeksLine },
  props: {
    students: Array,
    weeks: Array
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