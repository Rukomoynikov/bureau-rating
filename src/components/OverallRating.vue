<template>
  <div>
    Общий рейтинг
    <div class="header">
      <div class="row">#</div>
      <div class="row">студент</div>
      <div class="row">неделя</div>
      <div class="row">рейтинг</div>
    </div>

    <div class="body">
      <div v-for="(student, i) in activeStudents" class="flex">
        <div class="row">{{ i }}</div>
        <div class="row">{{ student.name }}</div>
        <div class="row">{{ student.weeks.length }}</div>
        <div class="row">{{ Math.floor(student.totalScore) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OverallRating',
  props: {
  	students: Object,
    studentIndex: Number
  },
  computed: {
    activeStudents() {
      return this.students.filter(function(student) {
        return student.enrollment_status != "cancelled"
        || student.enrollment_status != "paused"
        || student.enrollment_status != "failed" 
      })
    }
  }
})
</script>

<style scoped>
.header {
  display: flex;
}

.flex {
  display: flex;
}

.row {
  padding: 5px 10px;
}
</style>