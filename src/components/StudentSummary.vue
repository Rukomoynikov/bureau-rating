<!-- Описание студента для правой колонки списка. -->

<template>
  <div class="StudentSummary">
    <div v-if="isCanceled" class="cancelled">
      {{studentIndex + 1}} {{student.name}} {{ Math.floor(student.totalScore) }}
      <br>
      <span><span class="hidden">{{studentIndex + 1}}&nbsp;</span>{{student.job}}, {{student.city}} </span>
    </div>

    <div v-else>
      {{studentIndex + 1}} {{student.name}} {{ Math.floor(student.totalScore) }}
      <br>
      <span><span class="hidden">{{studentIndex + 1}}&nbsp;</span>{{student.job}}, {{student.city}} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StudentSummary',
  props: {
  	student: Object,
    studentIndex: Number
  },
  computed: {
    description() {
       if(this.student.job && this.student.city) {
       	return `${this.student.job}, ${this.student.city}`
       }

       return `${this.student.job}${this.student.city}`
  	},
    isCanceled() {
      return this.student.enrollment_status == "cancelled"
        || this.student.enrollment_status == "paused"
        || this.student.enrollment_status == "failed" 
    }
  }
})
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  .StudentSummary {
    order: 1;
  }
}

.cancelled {
  color: grey;
  text-decoration: line-through;
}

.hidden {
  visibility: hidden;
}
</style>