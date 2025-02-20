<script setup lang="ts">
defineProps<{
    data: RSCerts
}>()
</script>

<template>
    <section class="rscerts">
        <div class="wrapper">
            <h3>{{ data.title }}</h3>
            <article>
                <img v-for="(img, k) in data.imgs" :key="'cert'+k" :src="img" alt="">
            </article>
        </div>
    </section>
</template>

<style scoped>
section.rscerts {
    padding: 100px 40px;
    border-top: 2px solid var(--light-grey);
    background-image: url('/images/bg-certificates.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
}
.rscerts .wrapper {
    display: flex;
    justify-content: space-between;
}
.rscerts h3 {
    max-width: 370px;
    padding-left: 15px;
    font-size: 30px;
    font-weight: normal;
}
.rscerts img {
    margin: 0 5px;
}
@media (max-width: 800px) {
    section.rscerts {
        max-width: 100vw;
        padding: 10px 20px;
    }
    .rscerts .wrapper {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .rscerts img {
        width: 27vw;
    }
}
</style>