<script setup lang="ts">
import { ref } from 'vue';
import RSDialog from '@/components/common/RSDialog.vue';

const props = defineProps<{
    small?: boolean
    ack?: Ack
    item?: string
    type?: string
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
                item: props.item ?? "",
                itemtype: props.type ?? "",
                problems: props.ack?.problems.join(",") ?? "",
                repair: props.ack?.repair.join(",") ?? ""
            })
        })
        dialog.value = true
    }
}

</script>

<template>
    <RSDialog :visible="dialog" @close="closeDialog"/>
    <section class="rsack" :class="[small ? 'small': '']">
        <div class="wrapper">
            <article>
                <h3>Спросите эксперта Bosch</h3>
                <p>Оставьте номер телефона, и специалист перезвонит в течение 10 минут</p>
            </article>
            <article>
                <span>
                    <input type="tel" v-model="phone" v-mask="'+7 (###) ###-##-##'" placeholder="+7 (___) ___-__-__">
                    <input type="button" value="Отправить" @click="call">
                </span>
                <p>Нажимая кнопку &laquo;Отправить&raquo;, вы соглашаетесь на обработку персональных данных и подтверждаете совершеннолетие в соответствии с  условиями.</p>
            </article>
            <article>
                <p>Услуги предоставляются<br>с 9:00 до 22:00</p>
            </article>
        </div>
    </section>
</template>

<style scoped>
section.rsack {
    padding: 50px 30px 50px;
    margin: 0;
    background-image: url('/images/services-bg.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    border-top: 2px solid var(--light-grey);
}
.rsack.small {
    border-top: none;
}
.rsack.small h3 {
    display: none;
}
.rsack .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
.rsack article {
    width: 30%;
    padding: 0 20px;
}
.rsack article:nth-child(2) {
    min-width: 340px;
}
.rsack article:nth-child(2) p {
    padding-top: 10px;
    font-size: 12px;
}
.rsack article:nth-child(3) p {
    font-size: 18px;
}
.rsack article:last-child {
    text-align: right;
}
.rsack h3 {
    margin: 0;
    padding-bottom: 8px;
    font-size: 23px;
    font-weight: normal;
}
.rsack p {
    margin: 0;
    font-size: 14px;
}
.rsack input[type="tel"] {
    padding: 10px;
    font-size: 15px;
    outline: none;
}
.rsack input[type="button"] {
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: var(--button-color);
    color: #fff;
    border: 1px solid var(--button-color);
    cursor: pointer;
}
@media (max-width: 800px) {
    section.rsack {
        padding: 0;
        max-width: 100vw;
    }
    .rsack .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        padding: 10px 0;
    }
    .rsack article {
        width: 100%;
        min-width: 0;
        padding: 0;
    }
    .rsack h3,
    .rsack p,
    .rsack span {
        margin: 10px 0;
        padding: 0 20px;
    }  
    .rsack article:last-child {
        text-align: left;
    }
}
</style>