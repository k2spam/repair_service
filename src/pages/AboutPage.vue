<script setup lang="ts">
import RSHeader from '@/components/RSHeader.vue';
import RSAbout from '@/components/about/RSAbout.vue';
import main from '@/data/main.json'
</script>

<template>
    <RSHeader :data="main.header" small/>
    <RSAbout/>
</template>