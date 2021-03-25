<template>
  <div class="StudentWeek">
    <div v-for="(value, index) in 16" class="cellWithResult">
      <div v-if="weekIsEmpty(weeks[index])">
        .
      </div>
      <div v-else :class="[cssClass(weeks[index].diff)]">

        {{ weeks[index].weekSummScore }}

        <!-- <div class="goldMedals">
          <GoldMedals :courses="weeks[index].details" />
        </div> -->
      </div>
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
.StudentWeek {
  display: flex;
}

@media screen and (max-width: 640px) {
  .StudentWeek {
    order: 2;
  }
}

.cellWithResult {
  width: 40px;
  height: 40px;
  display: flex;

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