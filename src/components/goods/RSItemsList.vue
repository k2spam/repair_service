<script setup lang="ts">
import RSItem from '@/components/goods/RSItem.vue';
import { ref } from 'vue';

defineProps<{
    data: Items
}>()

const tab = ref('itemblock01')
</script>

<template>
    <section class="rsitems">
        <h3>{{ data.title }}</h3>
        <div class="rsitems__main">
            <div class="wrapper">
                <ul>
                    <li 
                        v-for="(block, k) in data.items" 
                        :key="'itemblock0'+k"
                        :class="[ tab == 'itemblock0'+k ? 'current' : '' ]"
                        @click="tab = 'itemblock0'+k"
                    >
                        {{ block.title }}
                        <div></div>
                    </li>
                </ul>
                <div v-for="(block, k) in data.items" :key="'itemblock1'+k" class="rsitems__wrap">
                    <template v-if="tab == 'itemblock0'+k">
                        <RSItem 
                            v-for="(item, k1) in block.items" 
                            :key="'itemblockitem'+k1"
                            :item="item"
                            :type="block.type"
                            :typet="block.title"
                        />
                    </template>
                </div>
            </div>
        </div>
        <div class="rsitems__device">
            <ul>
                <li 
                    v-for="(block, k) in data.items" 
                    :key="'itemblock0'+k"
                    :class="[ tab == 'itemblock0'+k ? 'current' : '' ]"
                    @click="tab = 'itemblock0'+k"
                >
                    <RouterLink :to="{path:'/model', query: {type: block.type, typet: block.title}}" class="rsitem">
                        <svg>
                            <use :xlink:href="block.icon"></use>
                        </svg>
                        <span>{{ block.title }}</span>
                        <svg>
                            <use xlink:href="/icons/icons.svg#icon_arrow-go" fill="#0094fe"></use>
                        </svg>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
section.rsitems {
    padding: 20px 0 0;
}
.rsitems .rsitems__main {
    display: block;
}
.rsitems .rsitems__device {
    display: none;
}
.rsitems h3 {
    margin: 0;
    padding: 30px 20px 20px;
    text-align: center;
    font-size: 23px;
    font-weight: normal;
}
.rsitems .rsitems__main ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    align-content: center;
    justify-content: center;
}
.rsitems .rsitems__main li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 150px;
    padding: 10px 0 0;
    cursor: pointer;
    transition: background 500ms ease;
    user-select: none;
}
.rsitems .rsitems__main li div {
    width: 0;
    height: 3px;
    margin: 10px 0 0;
    background-color: var(--button-color);
    transition: width 300ms ease;
}
.rsitems .rsitems__main li.current {
    background-color: var(--button-bg-color);
}
.rsitems .rsitems__main li:hover div,
.rsitems .rsitems__main li.current div {
    width: 100%;
}
.rsitems__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
@media (max-width: 800px) {
    section.rsitems {
        padding-top: 0;
        max-width: 100vw;
    }
    .rsitems .rsitems__main {
        display: none;
    }
    .rsitems .rsitems__device {
        display: block;
    }
    .rsitems h3 {
        padding-bottom: 0;
    }
    .rsitems .rsitems__device ul {
        padding: 0 20px;
    }
    .rsitems .rsitems__device li {
        margin: 10px 0;
        padding: 10px;
        list-style-type: none;
        border: 1px solid var(--light-grey);
        border-radius: 7px;
    }
    .rsitems .rsitems__device li a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: black
    }
    .rsitems .rsitems__device li svg {
        width: 30px;
        height: 30px;
        opacity: 0.7;
    }
}
</style>