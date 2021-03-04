<template>
  <div 
    v-for="(weekNumber, index) in weekNumbers" 
    :key="weekNumber" class="container">

    <div class="weekLabel">Неделя {{weekNumber}}</div>

    <div v-for="(student, studentIndex) in weeks[weekNumber]" :key="studentIndex" class="student">
      <StudentWeeks :weeks="student.weeks" />
      <StudentSummary :student="student" :studentIndex="studentIndex" />
    </div>
  </div>
</template>

<script lang="ts">
import StudentSummary from './StudentSummary.vue'
import StudentWeeks from './StudentWeeks.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeeklyRating',
  components: { StudentSummary, StudentWeeks },
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
.cellWithResult {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  position: relative;
}

.container {
  margin-top: 20px;
}

.student {
  display: flex;
  margin-bottom: 8px;
}

.student:hover {
  background: #d8e2dc;
}

.weekLabel {
  font-weight: 700;
}
</style>