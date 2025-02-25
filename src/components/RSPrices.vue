<script setup lang="ts">
import main from "@/data/main.json"

const prices = main.prices
</script>

<template>
    <section class="rsprices">
        <h3>Услуги и цены</h3>
        <template v-for="(block, k0) in prices" :key="'rsprsbl'+k0">
            <h4>{{ block.title }}</h4>
            <dl v-for="(item, k1) in block.list">
                <dt>{{ item.title }}</dt>
                <dd>{{ item.price }}</dd>
            </dl>
        </template>
    </section>
</template>

<style scoped>
section.rsprices {
    padding: 20px 25px 50px;
    background-image: url('/images/services-bg.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.rsprices h3 {
    font-size: 30px;
    font-weight: normal;
    text-align: center;
}
.rsprices h4 {
    font-size: 25px;
    font-weight: normal;
    text-align: center;
}
.rsprices dl {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    padding: 15px;
}
.rsprices dl:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
}
.rsprices dd {
    text-align: right;
    margin: 0;
    padding: 0;
    min-width: 75px;
}

@media (max-width: 800px) {
    section.rsprices {
        padding: 10px 0 30px;
    }
    .rsprices h4 {
        font-size: 23px;
        margin: 25px 0 10px;
    }
}
</style>