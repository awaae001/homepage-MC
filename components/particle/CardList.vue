<script setup lang="ts">
defineProps<{
    dataList: Array<any>;
}>();
</script>

<!-- TODO: 监听滚轮，转换为横向滚动 -->

<template>
    <ul class="z-card-container">
        <ZCard v-for="(card, index) in dataList" :key="index" :data="card" />
    </ul>
</template>

<style scoped>
.z-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

@keyframes check {
    0% {
        mask: linear-gradient(to right, #fff 80%, transparent);
    }

    1%,
    99% {
        mask: linear-gradient(to right, transparent, #fff 20%, #fff 80%, transparent);
    }

    100% {
        mask: linear-gradient(to right, transparent, #fff 20%);
    }
}
</style>