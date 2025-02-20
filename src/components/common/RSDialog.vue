<script setup lang="ts">
    defineProps<{
        visible: boolean
    }>()

    const emit = defineEmits(['close'])
    const close = () => emit('close')
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="visible" class="rsdialog">
                <div class="content">
                    <p>Ваша заявка принята, менеджер свяжется с вами в течение 10 минут</p>
                    <button @click="close">Закрыть</button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.rsdialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.rsdialog .content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}
.rsdialog p {
    width: 300px;    
}
.rsdialog button {
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: var(--button-color);
    color: #fff;
    border: 1px solid var(--button-color);
    cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>