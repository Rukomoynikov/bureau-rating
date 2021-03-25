<template>
  <div class="table">
    <div class="body table__body">
      <div class="table__row">
        <div class="table__cell table__header">Место</div>
        <div class="table__cell table__header">Студент</div>
        <div class="table__cell table__header">Неделя</div>
        <div class="table__cell table__header">Рейтинг</div>
      </div>

      <div v-for="(student, i) in activeStudents" class="flex table__row">
        <div class="table__cell">{{ i + 1 }}</div>
        <div class="table__cell">{{ student.name }}</div>
        <div class="table__cell">{{ student.weeks.length }}</div>
        <div class="table__cell">{{ Math.floor(student.totalScore) }}</div>
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
      return this.students.filter((student) => {
        return ["cancelled", "paused", "failed"].indexOf(student.enrollment_status) == -1
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

.table { display: table; }

.table__body {}

.table__row { display: table-row; }

.table__cell { 
  padding: 5px 10px;
  display: table-cell; 
}

.table__cell:first-child {
  padding-left: 0px;
}

.table__header { font-weight: bold; }
</style>