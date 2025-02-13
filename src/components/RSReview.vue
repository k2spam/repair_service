<script setup lang="ts">
defineProps<{
    item: Review
}>()
</script>

<template>
    <article class="rsrew">
        <div>
            <span :style="'background-image: url('+item.image+');'"></span>
        </div>
        <div>
            <h5>{{ item.name }}</h5>
            <p>{{ item.text }}</p>
        </div>
    </article>
</template>

<style scoped>
article.rsrew {
    display: flex;
    max-width: 70%;
    align-items: center;
}
.rsrew div:nth-child(1) {
    width: 300px;
    min-width: 300px;
    height: 300px;
    overflow: hidden;
    border: 2px solid var(--button-color);
    border-radius: 50%;
    padding: 5px;
}
.rsrew div:nth-child(1) span {
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 50%;
}
.rsrew div:nth-child(2) {
    padding: 0 0 0 20px;
}
.rsrew h5 {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
}
.rsrew p {
    font-size: 15px;
    text-align: justify;
}
</style>