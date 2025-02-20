<script setup lang="ts">
defineProps<{
    item: Employee
}>()
</script>
<template>
    <caption class="rsemp">
        <img :src="item.image" alt="">
        <div>
            <h5>{{ item.name }}</h5>
            <p><span>Стаж:</span>{{ item.expirience }}</p>
        </div>
    </caption>
</template>

<style scoped>
caption.rsemp {
    display: flex;
    align-items: center;
    flex: 1fr;
    padding: 10px 0;

    text-align: left;
}
.rsemp img {
    border-radius: 50%;
}
.rsemp div {
    padding-left: 10px;
}
.rsemp h5 {
    margin: 0;
    padding: 0;
    width: 50%;
    font-size: 17px;
    font-weight: 500;
    user-select: none;
    text-align: left;
}
.rsemp p {
    margin: 0;
    padding: 5px 0 0;
    text-align: left;
    font-size: 15px;
    user-select: none;
}
.rsemp p span{
    padding-right: 5px;
}
@media (max-width: 800px) {
    caption.rsemp {
        width: 46vw;
        margin-left: 4vw;
        text-align: left;
    }
    .rsemp img {
        width: 50px;
        border-radius: 50%;
    }
    .rsemp h5 {
        font-size: 15px;
    }
    .rsemp p {
        font-size: 13px;
    }
}
</style>