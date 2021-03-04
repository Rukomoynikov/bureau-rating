<template>
  <div >
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
       if(student.job && student.city) {
       	return `${student.job}, ${student.city}`
       }

       return `${student.job}${student.city}`
  	},
    isCanceled() {
      return student.enrollment_status == "cancelled"
    }
  }
})
</script>

<style scoped>

</style>