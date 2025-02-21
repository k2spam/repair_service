<script setup lant="ts"></script>
<template>
    <section class="rsabout">
        <div class="wrapper">
            <h3>Информация о компании</h3>
            <p>ИП Мордовин Александр Владимирович</p>
            <p>
                <span>ИНН 644305059470</span>
                <span>ОГРНИП 323645700068688</span>
            </p>
            <p>
                Российская Федерация, г. Москва, вн.тер.г.
                муниципальный округ Южнопортовый, пер. 3-й
                Крутицкий, д.11, помещ. 7Н
            </p>
            <p>
                <RouterLink to="/">Вернуться</RouterLink>
            </p>
        </div>
    </section>
</template>

<style scoped>
section.rsabout {
    display: flex;
}
.rsabout h3 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}
.rsabout p {
    text-align: center;
    max-width: 300px;
}
.rsabout p:last-child {
    margin: 50px 0 0;
}
.rsabout span {
    display: block;
}
.rsabout a {
    padding: 10px 20px;
    font-size: 16px;
    background-color: var(--button-color);
    color: #fff;
    border: 1px solid var(--button-color);
    cursor: pointer;
    text-decoration: none;
}
</style>