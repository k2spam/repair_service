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
        <div class="wrapper">
            <section>
                <img src="/images/logo.webp" alt="">
                <span>Сервисный центр техники Bosch, 2025.</span>
                <span>Все права защищены.</span>
            </section>
            <section>
                <span>ИНН 644305059470</span>
                <span>Огрнип 323645700068688</span>
                <span>
                    <RouterLink class="small" to="/about">Подробнее...</RouterLink>
                </span>
            </section>
            <section>
                <a :href="'tel:'+phone">{{decoratedPhone}}</a>
                <a href="tel:+79919464472">+7 (991) 946-44-72</a>
                <span>Работаем без выходных с 9:00 до 21:00.</span>
            </section>
        </div>
    </footer>
</template>

<style scoped>
footer.rsfooter {
    padding: 20px 35px;
    background-image: url('/images/services-bg.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 2px solid var(--light-grey);
}
.rsfooter .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: end;
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
.rsfooter a.small {
    padding-bottom: 10px;
    text-decoration: none;
    color: var(--button-color);
    font-size: 15px;
}
@media (max-width: 800px) {
    footer.rsfooter {
        padding: 20px 20px;
    }
    .rsfooter .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
    .rsfooter section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .rsfooter span {
        display: inline-block;
        padding: 10px 0;
    }
}
</style>