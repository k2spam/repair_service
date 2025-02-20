<script setup lang="ts">
defineProps<{
    data: Selector
}>()

const list = defineModel()
</script>

<template>
    <section class="selector" v-if="data.items.length">
        <h3>{{ data.title }}</h3>
        <article>
            <label v-for="(item, k) in data.items" :key="k+item">
                <input type="checkbox" v-model="list" :value="item">
                <span>{{ item }}</span>
            </label>
        </article>
    </section>
</template>

<style scoped>
section.selector {
    padding: 0 55px 40px;
}
.selector h3 {
    font-size: 20px;
    font-weight: normal;
    text-align: center;
}
.selector article {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.selector label {
    display: flex;
    align-items: center;
    width: 290px;
    margin: 3px 10px;
    padding: 7px 10px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid var(--light-grey);
    text-align: left;
    cursor: pointer;
    user-select: none;
}
.selector span {
    display: inline-block;
    padding-left: 5px;
}
@media (max-width: 800px) {
    section.selector {
        max-width: 100vw;
        padding: 0 20px 20px;
    }
}
</style>

