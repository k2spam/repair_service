<script setup lang="ts"></script>

<template>
    <section class="rssupport">
        <h3>Поддержка клиентов</h3>
        <p>При возникновении проблемы, вы можете оставить заявку на нашем сайте. Чтобы получить консультацию специалиста сервисного центра заполните форму обратной связи на сайте</p>
        <p>Специалист свяжется с вами в течение 10 минут, уточнит проблему и согласует время выезда мастера. Мастер приедет со всем необходимым оборудованием для устранения поломки.</p>
    </section>
</template>

<style>
section.rssupport {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 50px 35px;
    background-image: url('@/assets/images/services-bg.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.rssupport h3 {
    font-size: 25px;
    font-weight: normal;
}
.rssupport p {
    max-width: 70%;
}
</style>