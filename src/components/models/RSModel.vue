<script setup lang="ts">
import RSSelector from '@/components/models/RSSelector.vue'
import RSAck from '@/components/RSAck.vue';

defineProps<{
    items: Model
}>()
</script>

<template>
    <section class="rsmodel">
        <h3>{{ items.type }} <span>{{ items.subtype }}</span></h3>
        <RSSelector :data="{title:'Выберите Вашу проблему', items: items.problems}"/>
        <RSSelector :data="{title:'Выберите нужный ремонт', items: items.repair}"/>
        <RSAck small/>
    </section>
</template>

<style scoped>
section.rsmodel {
    min-height: 100%;
    background-image: url('/images/services-bg.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 2px solid var(--light-grey);
}
.rsmodel h3 {
    display: flex;
    flex-direction: column;
    font-weight: normal;
    font-size: 30px;
    text-align: center;
}
.rsmodel h3 span {
    font-size: 18px;
}
</style>