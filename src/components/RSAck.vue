<script setup lang="ts"></script>

<template>
    <section class="rsack">
        <article>
            <h3>Спросите эксперта Bosch</h3>
            <p>Оставьте номер телефона, и специалист перезвонит через 10 минут</p>
        </article>
        <article>
            <span>
                <input type="text" placeholder="+7 (___) ___-__-__">
                <input type="button" value="Отправить">
            </span>
            <p>Нажимая кнопку &laquo;Отправить&raquo;, вы соглашаетесь на обработку персональных данных и подтверждаете совершеннолетие в соответствии с  условиями.</p>
        </article>
        <article>
            <p>Услуги предоставляются<br>с 9:00 до 22:00</p>
        </article>
    </section>
</template>

<style scoped>
section.rsack {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 30px;
    margin: 30px 0 0;
    background-image: url('@/assets/images/services-bg.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
}
.rsack article {
    width: 30%;
    padding: 0 20px;
}
.rsack article:nth-child(2) {
    min-width: 340px;
}
.rsack article:nth-child(2) p {
    padding-top: 10px;
    font-size: 12px;
}
.rsack article:nth-child(3) p {
    font-size: 18px;
}
.rsack article:last-child {
    text-align: right;
}
.rsack h3 {
    margin: 0;
    padding-bottom: 8px;
    font-size: 23px;
    font-weight: normal;
}
.rsack p {
    margin: 0;
    font-size: 14px;
}
.rsack input[type="text"] {
    padding: 10px;
    font-size: 15px;
    outline: none;
}
.rsack input[type="button"] {
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: var(--button-color);
    color: #fff;
    border: 1px solid var(--button-color);
    cursor: pointer;
}
</style>