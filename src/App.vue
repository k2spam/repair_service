<script setup lang="ts">
import { RouterView } from 'vue-router'
import RSFooter from './components/RSFooter.vue';
</script>

<template>
  <div class="main">
    <RouterView />
  </div>
  <RSFooter phone="+74951426588"/>
</template>

<style>
:root {
  --button-color: rgb(0, 148, 254);
  --button-bg-color: rgba(148, 148, 148, 0.10);
  --text-color: rgb(50, 50, 50);
  --light-grey: rgb(200, 200, 200);
}

header, main, footer {
  max-width: 100vw;
  min-width: 0;
}

html, body, #app {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", serif;
}
#app {
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header"
    "main"
    "footer";
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
}

header {
  grid-area: header;
}
.main {
  grid-area: main;
}
footer {
  grid-area: footer;
}
.wrapper {
  max-width: 1270px;
  margin: 0 auto;
}

@media (max-width: 800px) {
  #app {
    min-height: 100svh;
  }
}
</style>
