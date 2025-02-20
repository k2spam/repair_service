<script setup lang="ts">
const props = defineProps<{
    type: string
    typet: string
    item: Item
}>()

const query = {
    type: props.type,
    typet: props.typet,
    subtype: props.item.title
}
</script>

<template>
    <RouterLink :to="{path:'/model', query: query}" class="rsitem">
        <article >
            <h5>{{ item.title }}</h5>
            <img :src="item.image" alt="">
            <p>{{ item.description }}</p>
        </article>
    </RouterLink>
</template>

<style scoped>
.rsitem {
    width: 18%;
    max-width: 300px;
    min-width: 200px;
    padding: 0 10px;
    margin: 5px;
    text-align: center;
    cursor: pointer;
    border: 1px solid var(--light-grey);
    text-decoration: none;
}
.rsitem h5 {
    font-size: 16px;
    font-weight: normal;
    color: var(--button-color);
}
.rsitem img {
    height: 150px;
}
.rsitem p {
    font-size: 14px;
    color: var(--text-color)
}
</style>