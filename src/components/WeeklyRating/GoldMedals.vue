<template>
  <div 
  	v-for="course in courses"
  	:class="'goldMedals__medal'" 
   	:style="{ height: `${calcHeight(course)}px` }" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GoldMedals',
  props: {
  	courses: Array
  },
  computed: {
    amountGoldMedals() {
      return this.courses.filter(course => course.score == 100).length
    }
  },
  methods: {
    calcHeight (course) {
      return (course.score * 40) / 100
  	}
  }
})
</script>

<style>
.goldMedals__medal {
  width: 2px; 
  background: red;
}
</style>