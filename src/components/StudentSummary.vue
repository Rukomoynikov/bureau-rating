<template>
  <div>
  	{{student.name}}
  	<br>
  	<span>{{student.job}}, {{student.city}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StudentSummary',
  props: {
  	student: Object
  },
  computed: {
    description() {
       if(student.job && student.city) {
       	return `${student.job}, ${student.city}`
       }

       return `${student.job}${student.city}`
  	}
  }
})
</script>

<style scoped>

</style>