<script setup lang="ts">
import { ref } from 'vue';
import RSReview from '@/components/reviews/RSReview.vue';

const props = defineProps<{
    data: Reviews
}>()

const current = ref('rsrew0')
let cnum = 0

const toPrev = () => {
    cnum = cnum - 1 > 0 ? cnum - 1 : props.data.items.length - 1
    current.value = `rsrew${cnum}`
}
const toNext = () => {
    cnum = (cnum + 1) <= props.data.items.length - 1 ? cnum + 1 : 0
    current.value = `rsrew${cnum}`
}
</script>

<template>
    <section class="rsrews">
        <h3>Примеры работ и отзывы клиентов</h3>
        <div class="wrapper">
            <div class="rsrews__device">
                <span class="rsrews_go_device rsrews_revert" @click="toPrev()">
                    <svg>
                        <use xlink:href="/icons/icons.svg#icon_arrow-go"></use>
                    </svg>
                </span>
                <span class="rsrews_go_device" @click="toNext()">
                    <svg>
                        <use xlink:href="/icons/icons.svg#icon_arrow-go"></use>
                    </svg>
                </span>
            </div>
            <div class="rsrews_inner">
                <span class="rsrews_go_main rsrews_revert" @click="toPrev()">
                    <svg>
                        <use xlink:href="/icons/icons.svg#icon_arrow-go"></use>
                    </svg>
                </span>
                <template v-for="(item, k) in data.items" :key="'review'+k">
                    <RSReview v-if="current == 'rsrew'+k" :item="item"/>
                </template>
                <span class="rsrews_go_main" @click="toNext()">
                    <svg>
                        <use xlink:href="/icons/icons.svg#icon_arrow-go"></use>
                    </svg>
                </span>
            </div>
        </div>
    </section>
</template>

<style scoped>
section.rsrews {
    padding: 30px 0;
    text-align: center;
}
.rsrews .rsrews_go_main {
    display: block;
}
.rsrews .rsrews__device {
    display: none;
}
.rsrews h3 {
    padding: 0 0 20px;
    font-size: 25px;
    font-weight: normal;
}
.rsrews .rsrews_inner {
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
.rsrews svg {
    width: 30px;
    height: 30px;
    filter: invert();
}
.rsrews_revert svg {
    transform: rotate(180deg);
}
@media (max-width: 800px) {
    section.rsrews {
        position: relative;
    }
    .rsrews h3 {
        padding: 0 0 0;
        font-size: 25px;
        font-weight: normal;
    }
    .rsrews .rsrews_go_main {
        display: none;
    }
    .rsrews .rsrews__device {
        position: absolute;
        top: 400px;
        display: flex;
        justify-content: space-between;
        width: 100vw;
        max-width: 100vw;
        padding: 0 10px;
        box-sizing: border-box;
    }
}
</style>