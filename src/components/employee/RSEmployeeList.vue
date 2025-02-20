<script setup lang="ts">
import RSEmployee from './RSEmployee.vue';

defineProps<{
    items: Employee[]
}>()
</script>

<template>
    <section class="rsemplist">
        <div class="wrapper">
            <RSEmployee v-for="(item, k) in items" :key="'item'+k" :item="item"/>
        </div>
    </section>
</template>

<style scoped>
section.rsemplist {
    padding: 30px 35px 30px 50px;
    background-color: #F0F0F0;
}
.rsemplist .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
@media (max-width: 800px) {
    section.rsemplist {
        max-width: 100vw;
        padding: 0;
    }
    .rsemplist .wrapper {
        max-width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>