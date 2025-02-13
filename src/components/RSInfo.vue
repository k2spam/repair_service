<script setup lang="ts">
defineProps<{
    title: string
    subtitle: string
    bg: string
}>()
</script>
<template>
    <section class="rsinfo" :style='"background-image: url("+ bg +");"'>
        <h2>{{ title }}</h2>
        <h3>{{ subtitle }}</h3>
    </section>
</template>

<style scoped>
section.rsinfo {
    padding: 30px 20px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.rsinfo h2 {
    margin: 0;
    padding: 30px 0 20px;
    text-align: center;
    font-size: 30px;
    font-weight: normal;
}
.rsinfo h3 {
    margin: 0;
    padding: 20px 0 30px;
    text-align: center;
    font-size: 20px;
    font-weight: normal;
}
</style>