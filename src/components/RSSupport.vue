<script setup lang="ts"></script>

<template>
    <section class="rssupport">
        <div class="wrapper">
            <h3>Поддержка клиентов</h3>
            <p>При возникновении проблемы, вы можете оставить заявку на нашем сайте. Чтобы получить консультацию специалиста сервисного центра заполните форму обратной связи на сайте</p>
            <p>Специалист свяжется с вами в течение 10 минут, уточнит проблему и согласует время выезда мастера. Мастер приедет со всем необходимым оборудованием для устранения поломки.</p>
        </div>
    </section>
</template>

<style>
section.rssupport {
    padding: 50px 35px;
    background-image: url('/images/services-bg.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.rssupport .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.rssupport h3 {
    font-size: 25px;
    font-weight: normal;
}
.rssupport p {
    max-width: 70%;
}
@media (max-width: 800px) {
    section.rssupport {
        padding: 0 20px 20px;
    }
    .rssupport p {
        max-width: 100vw;
    }
}
</style>