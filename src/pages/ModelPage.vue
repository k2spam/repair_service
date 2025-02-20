<script setup lang="ts">
import { createRouter, createWebHashHistory, useRoute } from 'vue-router';
import RSHeader from '@/components/RSHeader.vue';
import RSModel from '@/components/models/RSModel.vue';

import main from '@/data/main.json'
import models from '@/data/model.json'

const route = useRoute()

const type = route.query.type as keyof typeof models
const items = models[type][0]
const modelItem: Model = {
    type: route.query.typet as string,
    subtype: route.query.subtype as string,
    problems: items.problems,
    repair: items.repair
}
</script>

<template>
    <RSHeader :data="main.header" small />
    <RSModel :items="modelItem" />
</template>