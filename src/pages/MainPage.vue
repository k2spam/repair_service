<script setup lang="ts">
import RSHeader from '@/components/RSHeader.vue';
import RSInfo from '@/components/RSInfo.vue';
import RSPrices from '@/components/RSPrices.vue';
import RSItemsList from '@/components/goods/RSItemsList.vue';
import RSAdventage from '@/components/RSAdventage.vue';
import RSResolve from '@/components/RSResolve.vue';
import RSAck from '@/components/RSAck.vue';
import RSCertificates from '@/components/RSCertificates.vue';
import RSEmployeeList from '@/components/employee/RSEmployeeList.vue';
import RSReviews from '@/components/reviews/RSReviews.vue';
import RSSupport from '@/components/RSSupport.vue';
import main from '@/data/main.json'
</script>

<template>
    <RSHeader :data="main.header"/>
    <RSInfo :data="main.info"/>
    <RSItemsList :data="main.goods"/>
    <RSPrices />
    <RSAdventage :item="main.adventage"/>
    <RSResolve :data="main.resolve"/>
    <RSAck/>
    <RSCertificates :data="main.certs"/>
    <RSEmployeeList :items="main.employees"/>
    <RSReviews :data="main.reviews"/>
    <RSSupport />
</template>