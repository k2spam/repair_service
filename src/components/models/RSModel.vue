<script setup lang="ts">
import RSSelector from '@/components/models/RSSelector.vue'
import RSAck from '@/components/RSAck.vue';
import { ref } from 'vue';

defineProps<{
    items: Model
}>()
const problems = ref([])
const repair = ref([])
</script>

<template>
    <section class="rsmodel">
        <h3>{{ items.type }} <span>{{ items.subtype }}</span></h3>
        <RSSelector v-model="problems" :data="{title:'Выберите Вашу проблему', items: items.problems}"/>
        <RSSelector v-model="repair" :data="{title:'Выберите нужный ремонт', items: items.repair}"/>
        <RSAck small :ack="{problems, repair}" :item="items.type" :type="items.subtype"/>
        <p>
            <RouterLink to="/">Вернуться</RouterLink>
        </p>
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
.rsmodel p {
    text-align: center;
    margin: 0;
    padding: 10px 0 30px;
}
.rsmodel a {
    padding: 10px 20px;
    font-size: 16px;
    background-color: var(--button-color);
    color: #fff;
    border: 1px solid var(--button-color);
    cursor: pointer;
    text-decoration: none;
}
</style>