<script setup lang="ts">
defineProps<{
    title: string
    description: string
}>()
</script>

<template>
    <section class="rscall">
        <!-- <h2>{{ title }}</h2> -->
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
    height: 100px;
    padding: 10px 50px 50px;
    background-color: #ffffffef;
}
.rscall h2 {
    font-size: 30px;
    font-weight: normal;
}
.rscall p {
    margin: 10px 0 20px;
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

@media (max-width: 800px) {
    .rscall {
        padding: 10px 20px 50px;
    }
}
</style>