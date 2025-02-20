<script setup lang="ts">
defineProps<{
    data: RSInfo
}>()
</script>
<template>
    <section class="rsinfo" :style='"background-image: url("+ data.bg +");"'>
        <h2>{{ data.title }}</h2>
        <h3>{{ data.subtitle }}</h3>
    </section>
</template>

<style scoped>
section.rsinfo {
    padding: 0 20px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.rsinfo h2 {
    margin: 0;
    padding: 30px 0 10px;
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
@media (max-width: 800px) {
    section.rsinfo {
        max-width: 100vw;
        padding: 0;
    }
    .rsinfo h2 {
        padding: 20px;
        font-size: 25px;
    }
    .rsinfo h3 {
        padding: 0 20px 30px;
        font-size: 17px;
    }
}
</style>