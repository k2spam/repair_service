<script setup lang="ts">
import RSAbout from '@/components/RSAbout.vue';
import RSHeader from '@/components/RSHeader.vue';
import main from '@/data/main.json'
</script>

<template>
    <RSHeader :data="main.header" small/>
    <RSAbout/>
</template>