<template>
  <div class="weeks">
    <div v-for="(value, index) in 16" class="cellWithResult">
      {{value}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeeksHeader',
})
</script>

<style scoped>
.weeks {
  display: flex;
}

.cellWithResult {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  border-bottom: 1px solid grey;
}
</style>