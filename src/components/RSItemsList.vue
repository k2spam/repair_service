<script setup lang="ts">
import RSItem from '@/components/RSItem.vue';
import { ref } from 'vue';

defineProps<{
    title: string
    items: ItemBlock[]
}>()

const tab = ref('itemblock00')
</script>

<template>
    <section class="rsitems">
        <h3>{{ title }}</h3>
        <ul>
            <li 
                v-for="(block, k) in items" 
                :key="'itemblock0'+k"
                :class="[ tab == 'itemblock0'+k ? 'current' : '' ]"
                @click="tab = 'itemblock0'+k"
            >
                {{ block.title }}
                <div></div>
            </li>
        </ul>
        <div v-for="(block, k) in items" :key="'itemblock1'+k" class="rsitems__wrap">
            <template v-if="tab == 'itemblock0'+k">
                <RSItem 
                    v-for="(item, k1) in block.items" 
                    :key="'itemblockitem'+k1"
                    :item="item"
                />
            </template>
        </div>
    </section>
</template>

<style scoped>
section.rsitems {
    padding: 20px 0 0;
}
.rsitems h3 {
    margin: 0;
    padding: 30px 20px 20px;
    text-align: center;
    font-size: 23px;
    font-weight: normal;
}
.rsitems ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    align-content: center;
    justify-content: center;
}
.rsitems li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 150px;
    padding: 10px 0 0;
    cursor: pointer;
    transition: background 500ms ease;
    user-select: none;
}
.rsitems li div {
    width: 0;
    height: 3px;
    margin: 10px 0 0;
    background-color: var(--button-color);
    transition: width 300ms ease;
}
.rsitems li.current {
    background-color: var(--button-bg-color);
}
.rsitems li:hover div,
.rsitems li.current div {
    width: 100%;
}
.rsitems__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>