<template>
  <div class="table">
    <div class="body table__body">
      <div class="table__row">
        <div class="row table__cell">#</div>
        <div class="row table__cell">студент</div>
        <div class="row table__cell">неделя</div>
        <div class="row table__cell">рейтинг</div>
      </div>

      <div v-for="(student, i) in activeStudents" class="flex table__row">
        <div class="row table__cell">{{ i }}</div>
        <div class="row table__cell">{{ student.name }}</div>
        <div class="row table__cell">{{ student.weeks.length }}</div>
        <div class="row table__cell">{{ Math.floor(student.totalScore) }}</div>
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

.table { display: table; }
.table__body {}
.table__row { display: table-row; }
.table__cell { display: table-cell; }
</style>