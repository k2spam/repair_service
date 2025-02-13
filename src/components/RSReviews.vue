<script setup lang="ts">
import { ref } from 'vue';
import RSReview from '@/components/RSReview.vue';

const props = defineProps<{
    title: string
    items: Review[]
}>()

const current = ref('rsrew0')
let cnum = 0

const toPrev = () => {
    cnum = cnum - 1 > 0 ? cnum - 1 : props.items.length - 1
    current.value = `rsrew${cnum}`
}
const toNext = () => {
    cnum = (cnum + 1) <= props.items.length - 1 ? cnum + 1 : 0
    current.value = `rsrew${cnum}`
}
</script>

<template>
    <section class="rsrews">
        <h3>Примеры работ и отзывы клиентов</h3>
        <div>
            <span @click="toPrev()">&larr;</span>
            <template v-for="(item, k) in items" :key="'review'+k">
                <RSReview v-if="current == 'rsrew'+k" :item="item"/>
            </template>
            <span @click="toNext()">&rarr;</span>
        </div>
    </section>
</template>

<style scoped>
section.rsrews {
    padding: 30px 0;
    text-align: center;
}
.rsrews h3 {
    padding: 0 0 20px;
    font-size: 25px;
    font-weight: normal;
}
.rsrews div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.rsrews span {
    display: inline-block;
    font-size: 50px;
    width: 50px;
    height: 50px;
    line-height: 45px;
    padding: 10px;
    vertical-align: middle;
    border-radius: 50%;
    background-color: var(--button-color);
    color: #fff;
    cursor: pointer;
    user-select: none;
}
</style>