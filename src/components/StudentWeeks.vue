<template>
  <div v-for="(value, index) in 16" class="cellWithResult">
    <div v-if="weekIsEmpty(weeks[index])">
      .
    </div>
    <div v-else :class="[cssClass(weeks[index].diff)]">
      {{ weeks[index].rank }}

      <!-- <div class="goldMedals">
        <GoldMedals :courses="weeks[index].details" />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GoldMedals from './GoldMedals.vue'

export default defineComponent({
  name: 'StudentWeeks',
  components: {GoldMedals},
  props: {
    weeks: Array
  },
  methods: {
    weekIsEmpty(weekValues) {
      return !!!weekValues
    },
    cssClass(value) {
      if(value > 0) {
        return 'positive'
      }

      if(value < 0) {
        return 'negative'
      }

      return 'flat'
    }
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

.positive {
  color: green;
}

.negative {
  color: red;
}

.goldMedals {
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: flex-end;
}
</style>