<script setup lang="ts">
import RSEmployee from './RSEmployee.vue';

defineProps<{
    items: Employee[]
}>()
</script>

<template>
    <section class="rsemplist">
        <RSEmployee v-for="(item, k) in items" :key="'item'+k" :item="item"/>
    </section>
</template>

<style scoped>
section.rsemplist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 35px 30px 50px;
    background-color: #F0F0F0;
}
</style>