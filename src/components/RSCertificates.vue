<script setup lang="ts">
defineProps<{
    title: string
    imgs: string[]
}>()
</script>

<template>
    <section class="rscerts">
        <h3>{{ title }}</h3>
        <article>
            <img v-for="(img, k) in imgs" :key="'cert'+k" :src="img" alt="">
        </article>
    </section>
</template>

<style scoped>
section.rscerts {
    display: flex;
    justify-content: space-between;
    padding: 100px 40px;
    border-top: 2px solid var(--light-grey);
    background-image: url('@/assets/images/bg-certificates.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
}
.rscerts h3 {
    max-width: 370px;
    padding-left: 15px;
    font-size: 30px;
    font-weight: normal;
}
.rscerts img {
    margin: 0 5px;
}
</style>