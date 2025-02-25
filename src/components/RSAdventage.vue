<script setup lang="ts">
defineProps<{
    item: Adventage
}>()
</script>

<template>
    <section class="rsadv" :style="'background-image: url('+item.bg+');'">
        <h3 v-if="item.title != null || item.title != ''">{{ item.title }}</h3>
        <div class="wrapper">
            <article>
                <ul>
                    <li v-for="(str, k) in item.advs" :key="'adv'+k">{{ str }}</li>
                </ul>
                <div>
                    <img :src="item.image" alt="">
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
section.rsadv {
    /* margin-top: 30px; */
    padding: 0px 55px;
    background-position: 50% 95%;
    background-size: cover;
}
.rsadv h3 {
    font-size: 30px;
    font-weight: 400;
    margin: 0;
    text-align: center;
}
.rsadv article {
    display: flex;
    align-items: center;
}
.rsadv ul {
    padding-right: 50px;
}
.rsadv ul li {
    padding: 10px 0;
}
@media (max-width: 800px) {
    section.rsadv {
        padding: 0;
        max-width: 100vw;
    }
    .rsadv .wrapper {
        margin: 0;
        padding: 0;
    }
    .rsadv article div {
        display: none;
    }
    .rsadv ul {
        margin: 5px 20px 5px 40px;
        padding: 0;
        list-style-type: decimal;
    }
    .rsadv ul li {
        margin: 20px 0;
        padding: 0;
    }
}
</style>