<script setup lang="ts">
import { ref } from 'vue';
import RSDialog from '@/components/common/RSDialog.vue';

defineProps<{
    title: string
    description: string
}>()

const phone = ref('')
const dialog = ref(false)
const closeDialog = () => dialog.value = false

const call = () => {
    if(phone.value != '' && phone.value.length === 18){
        fetch("https://bosch-original.ru/order", {
            mode: "no-cors",
            method: "POST",
            body: JSON.stringify({
                phone: phone.value.replace(/[\(\)\s-]/g, ''),
            })
        })
        dialog.value = true
    }
}
</script>

<template>
    <RSDialog :visible="dialog" @close="closeDialog"/>
    <section class="rscall">
        <!-- <h2>{{ title }}</h2> -->
        <p>{{ description }}</p>
        <span>
            <input 
                type="tel" 
                placeholder="+7 (___) ___-__-__"
                v-mask="'+7 (###) ###-##-##'"
                v-model="phone"
            >
            <input type="button" value="Заказать" @click="call">
        </span>
    </section>
</template>

<style scoped>
.rscall {
    width: 350px;
    padding: 10px 50px 30px;
    background-color: #ffffffef;
}
.rscall h2 {
    font-size: 30px;
    font-weight: normal;
}
.rscall p {
    margin: 10px 0 20px;
}
.rscall input[type="tel"] {
    padding: 10px;
    font-size: 15px;
    outline: none;
}
.rscall input[type="button"] {
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: var(--button-color);
    color: #fff;
    border: 1px solid var(--button-color);
    cursor: pointer;
}

@media (max-width: 800px) {
    .rscall {
        padding: 0 20px 15px;
    }
}
</style>