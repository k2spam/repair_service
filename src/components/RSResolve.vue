<script setup lang="ts">
defineProps<{
    data: ResolveList
}>()
</script>

<template>
    <section class="rsresolve" :style="'background-image: url('+data.bg+');'">
        <div class="wrapper">
            <article v-for="(item, k) in data.items" :key="'res'+k">
                <div class="rsresolve__iconwrap">
                    <img :src="item.icon" alt="">
                </div>
                <p>{{ item.text }}</p>
            </article>
        </div>
    </section>
</template>

<style scoped>
section.rsresolve {
    padding: 35px 50px;
    background-size: cover;
}
.rsresolve .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.rsresolve article {
    display: flex;
    align-items: center;
    max-width: 50%;
    min-width: 350px;
    padding: 20px 0;
}
.rsresolve .rsresolve__iconwrap {
    width: 70px;
    min-width: 70px;
    height: 70px;
}
.rsresolve img {
    width: 100%;
    height: 100%;
    opacity: 0.7;
}
.rsresolve p {
    margin: 0;
    padding: 0 20px;
    font-size: 15px;
}
@media (max-width: 800px) {
    section.rsresolve {
        max-width: 100vw;
        padding: 0;
    }
    .rsresolve .wrapper {
        padding: 20px 0;
    }
    .rsresolve .rsresolve__iconwrap {
        width: 50px;
        min-width: 50px;
        height: 50px;
    }
}
</style>