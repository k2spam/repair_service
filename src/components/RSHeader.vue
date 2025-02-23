<script setup lang="ts">
import { computed } from 'vue';
import RSCall from '@/components/RSCall.vue';

const props = defineProps<{
    data: Header
    small?: boolean
}>()

const decoratedPhone = computed(() => { 
    return props.data.phone.replace(/[\S](\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($2) $3-$4-$5")
})
</script>

<template>
    <header :class="[small ? 'small' : '']">
        <section class="rsheader" :style='"background-image: url("+data.image+");"'>
            <div class="wrapper">
                <article>
                    <div class="logo_wrapper">
                        <RouterLink to="/">
                            <img :src="data.logo" alt="">
                        </RouterLink>
                        <div class="phones">
                            <a class="link" :href='"tel:"+data.phone'>{{ decoratedPhone }}</a>
                            <a class="sublink" href="tel:+79919464472">+7 (991) 946-44-72</a>
                        </div>
                        <a class="button" :href='"tel:"+data.phone'>Позвонить</a>
                    </div>
                    <h1 v-if="!small">{{ data.title }}</h1>
                </article>
                <div v-if="!small" class="call">
                    <RSCall 
                        title="Сервисный центр Bosch" 
                        description="Обслуживание и все виды ремонтных работ. Оставьте номер телефона, и специалист перезвонит в течение 10 минут." 
                    />
                </div>
            </div>
        </section>
    </header>
</template>

<style scoped>
header {
    height: 100vh;
}
section.rsheader {
    height: 100vh;
    background-position: 52.5% 0;
    background-repeat: no-repeat;
    background-size: cover;
}
.rsheader .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.rsheader img {
    width: 230px;
}
header.small {
    height: 145px;
}
.small .rsheader {
    height: 145px;
}
.rsheader h1 {
    font-weight: normal;
    font-size: 35px;
    text-align: center;
}
.rsheader .phones {
    display: flex;
    flex-direction: column;
}
.rsheader .link {
    text-decoration: none;
    color: var(--button-color);
    font-size: 30px;
}
.rsheader .sublink {
    margin-top: 7px;
    text-decoration: none;
    color: var(--button-color);
    font-size: 30px;
}
.rsheader .button {
    background-color: var(--button-color);
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    padding: 15px 30px;
    cursor: pointer;
}
.rsheader .logo_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    padding: 30px 0 10px;
    margin: 0 auto;
}
.rsheader .call {
    display: flex;
    align-items: end;
    justify-content: space-around;
    margin: 0 0 30px;
}

@media (max-width: 800px) {
    header {
        height: 800px;
    }
    section.rsheader {
        height: 800px;
        background-size: cover;
    }
    header.small {
        height: 120px;
    }
    .small .rsheader {
        background-size: 200%;
        background-position: 50% 0;
        height: 120px;
    }
    .rsheader .link {
        /* display: none; */
        font-size: 14px;
    }    
    .rsheader .sublink {
        /* display: none; */
        margin-top: 4px;
        font-size: 14px;
    }  
    .rsheader img {
        width: 24vw;
        margin-left: 15px;
    }
    .rsheader .button {
        margin-right:15px;
        font-size: 14px;
        padding: 12px;
    }
    .rsheader h1 {
        font-size: 20px;
        margin-top: 0;
    }
    .rsheader .call {
        margin: 0 0 10px;
    }
}
</style>