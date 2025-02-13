<script setup lang="ts">
import { computed } from 'vue';
import RSCall from '@/components/RSCall.vue';

const props = defineProps<{
    logo: string
    title: string
    image: string
    phone: string
}>()

const decoratedPhone = computed(() => { 
    return props.phone.replace(/[\S](\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($2) $3-$4-$5")
})
</script>

<template>
    <header>
        <section class="rsheader" :style='"background-image: url("+image+");"'>
            <div class="wrapper">
                <div class="logo_wrapper">
                    <img :src="logo" alt="">
                    <a class="link" :href='"tel:"+phone'>{{ decoratedPhone }}</a>
                    <a class="button" :href='"tel:"+phone'>Позвонить</a>
                </div>
                <h1>{{ title }}</h1>
                <div class="call">
                    <RSCall 
                        title="Сервисный центр Bosch" 
                        description="Обслуживание и все виды ремонтных работ. Оставьте номер телефона, и специалист перезвонит через 10 минут." 
                    />
                </div>
            </div>
        </section>
    </header>
</template>

<style scoped>
header {
    height: 100vh;
}

section.rsheader {
    height: 100vh;
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-size: cover;
}

.rsheader img {
    width: 230px;
}

.rsheader h1 {
    font-weight: normal;
    font-size: 35px;
    text-align: center;
}

.rsheader .link {
    text-decoration: none;
    color: var(--button-color);
    font-size: 30px;
}

.rsheader .button {
    background-color: var(--button-color);
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    padding: 15px 30px;
    cursor: pointer;
}

.rsheader .logo_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    padding: 30px 0 10px;
}

.rsheader .call {
    display: flex;
    height: 70vh;
    align-items: center;
    justify-content: space-around;
}
</style>