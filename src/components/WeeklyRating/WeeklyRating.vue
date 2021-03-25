<template>
  <WeeksHeader />

  <div 
    v-for="(weekNumber, index) in weekNumbers" 
    :key="weekNumber" class="container">

    <div class="weekLabel">Неделя {{weekNumber}}</div>

    <div v-for="(student, studentIndex) in weeks[weekNumber]" :key="studentIndex" class="student">
      <StudentWeek :weeks="student.weeks" />
      <StudentSummary :student="student" :studentIndex="studentIndex" />
    </div>
  </div>
</template>

<script lang="ts">
import WeeksHeader from './WeeksHeader.vue'
import StudentSummary from './StudentSummary.vue'
import StudentWeek from './StudentWeek.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeeklyRating',
  components: { StudentSummary, StudentWeek, WeeksHeader },
  computed: {
    weekNumbers() {
      return Object.keys(this.weeks).reverse()
    }
  },
  props: {
    students: Array,
    weeks: Object
  }
})
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.student {
  display: flex;
  margin-bottom: 8px;
}

@media screen and (max-width: 640px) {
  .student {
    flex-wrap: wrap;
  }
}

.student:hover {
  background: #d8e2dc;
}

.weekLabel {
  font-weight: 700;
}
</style>