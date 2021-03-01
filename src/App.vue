<template>
  <Container 
    :students="students"

    :weeks="weeks" />
</template>

<script lang="ts">
import './assets/fonts/raleway/stylesheet.css'
import { defineComponent } from 'vue'
import Container from './components/Container.vue'
import axios from 'axios'

export default defineComponent({
  name: 'App',
  components: {
    Container
  },
  data () {
    return {
      weeks: [],
      students: []
    }
  },
  async mounted() {
    const response = await axios.get('https://bureau.ru/classroom/events/1565/reports/race.json')
    // https://bureau.ru/classroom/events/1589/reports/race.json
    const data = response.data.map(function (student) {
      student.totalScore = student.weeks.reduce(function(accumulator, week) {
        return accumulator + week.score
      }, 0)
      return student
    })

    const weeks = {}

    // Сортировка студентов по неделям. 
    // На основании количества пройденных недель.
    for(let i = 16; i >= 0; i--) {
      var result = data
        .filter(student => student.weeks.length == i)

      if(result.length) { weeks[i] = result }
    }
  
    this.students = response.data
    this.weeks = weeks
  },
})
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  font-family: "Raleway";
}

@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}

@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}
</style>