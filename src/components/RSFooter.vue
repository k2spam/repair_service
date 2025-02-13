<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    phone: string
}>()

const decoratedPhone = computed(() => { 
    return props.phone.replace(/[\S](\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($2) $3-$4-$5")
})
</script>

<template>
    <footer class="rsfooter">
        <section>
            <img src="/src/assets/images/logo.webp" alt="">
            <span>Сервисный центр техники Bosch, 2025.</span>
            <span>Все права защищены.</span>
        </section>
        <section>
            <span>ИНН 644305059470</span>
            <span>Огрнип 323645700068688</span>
        </section>
        <section>
            <a :href="'tel:'+phone">{{decoratedPhone}}</a>
            <span>Работаем ежедневно с 9:00 до 22:00</span>
            <span>Прием заказов без выходных</span>
        </section>
    </footer>
</template>

<style scoped>
footer.rsfooter {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 20px 35px;
    background-image: url('@/assets/images/services-bg.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 2px solid var(--light-grey);
}
.rsfooter section {
    display: flex;
    flex-direction: column;
}
.rsfooter section:nth-child(3) {
    text-align: right;
}
.rsfooter img {
    width: 130px;
    margin-bottom: 10px;
}
.rsfooter span {
    display: inline-block;
    padding: 5px 0;
}
.rsfooter a {
    padding-bottom: 10px;
    text-decoration: none;
    color: var(--button-color);
    font-size: 30px;
}
</style>