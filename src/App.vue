<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import RSHeader from './components/RSHeader.vue';
import RSFooter from './components/RSFooter.vue';
</script>

<template>
    <RSHeader 
      logo="/src/assets/images/logo.webp"
      title="Сервисный центр по ремонту техники Bosch"
      image="/src/assets/images/bosch-small.jpg"
      phone="+74951426588"
    />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
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

html, body, #app {
    margin: 0;
    padding: 0;
    height: 100%;
    min-height: 100%;
    font-family: "Montserrat", serif;
}
#app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header"
    "main"
    "footer"
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
  max-width: 1000px;
  margin: 0 auto;
}
</style>
