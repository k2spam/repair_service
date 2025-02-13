<script setup lang="ts">
defineProps<{
    title: string
    description: string
}>()
</script>

<template>
    <section class="rscall">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <span>
            <input type="text" placeholder="+7 (___) ___-__-__">
            <input type="button" value="Заказать">
        </span>
    </section>
</template>

<style scoped>
.rscall {
    width: 350px;
    height: 300px;
    padding: 50px;
    background-color: #ffffffef;
}
.rscall h2 {
    font-size: 30px;
    font-weight: normal;
}
.rscall p {
    margin: 30px 0 50px;
}
.rscall input[type="text"] {
    padding: 10px;
    font-size: 15px;
    outline: none;
}
.rscall input[type="button"] {
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: var(--button-color);
    color: #fff;
    border: 1px solid var(--button-color);
    cursor: pointer;
}
</style>