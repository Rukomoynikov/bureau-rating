<template>
  <h2>
    Показать студентов
    <form class="chartSelector">
      <label><input 
        type="radio" @change="update($event)" 
        :checked="selectedChart" value="weekly" 
        name="chartSelector">по неделям</label>
      <label><input 
        type="radio" @change="update($event)" 
        :checked="selectedChart" value="all" 
        name="chartSelector">все вместе</label>
    </form>
  </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    selectedChart: String
  },
  methods: {
    update(event) {
      console.log(event.target.value)
      this.$emit('update:modelValue', event.target.value)
    }
  }
})
</script>

<style scoped>
.chartSelector {
  display: inline-block;
}

.chartSelector input {
  vertical-align: middle;
  margin-right: 7px;
}

.chartSelector label {
  margin-left: 9px;
}
</style>

