<template>
  <h2>
    Показать рейтинг
    <form class="chartSelector">
      <label><input
        type="radio"
        @change="update($event)" 
        v-model="localSelectedChart" value="weekly"
        name="chartSelector">по неделям</label>
      <label><input
        type="radio"
        @change="update($event)" 
        v-model="localSelectedChart" value="all"
        name="chartSelector">все вместе</label>
    </form>
  </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  data() {
    return {
      localSelectedChart: null
    }
  },
  props: {
    selectedChart: String
  },
  methods: {
    update(event) {
      this.$emit('update:selectedChart', event.target.value)
    }
  },
  mounted() {
    this.localSelectedChart = this.selectedChart
  },
  watch: {
    selectedChart(newValue, oldValue) {
      this.localSelectedChart = newValue
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

