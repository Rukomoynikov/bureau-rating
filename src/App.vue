<!-- Входная точка приложения. Содержит:
- глобальные стили -->
<template>
  <Page :students="students" :weeks="weeks" />
</template>

<script lang="ts">
import './assets/fonts/raleway/stylesheet.css'
import { defineComponent } from 'vue'
import Page from './components/Page.vue'

export default defineComponent({
  name: 'App',
  components: {
    Page
  },
  data () {
    return {
      weeks: [],
      students: []
    }
  },
  async mounted() {

  },
})
</script>

<style>
html, body {
  margin: 0px;
  padding: 0px;
  background: #fce6d5;
}

* {
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 20px;
  padding-left: 10px;
  font-family: "Raleway";
  background: #fce6d5;
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