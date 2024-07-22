<script setup lang="ts">
useHead({ title: '日志' });
definePageMeta({ headerText: '本服务器的大逝记' });
const timeline = {
    '2024.07.17-01:30':"服务器开服",
    '2024.07.17-02:45':"管理员（莫凉）在凌晨两点被腐竹叫出来测试服务器",
    '2024.07.17-04:00':"管理员（agx）在凌晨两点被腐竹叫出来测试服务器",
    '2024.07.18-23:47':"服务器暴揍了末影龙",
}
</script>

<template>
    <div class="timeline wrapper">
        <div class="timeline-item" v-for="(content, date) in timeline" :key="date">
            <div class="timeline-item-date">{{ date }}</div>
            <ZRender class="timeline-item-content" :content="content"></ZRender>
        </div>
    </div>
</template>

<style scoped lang="scss">
.timeline {
    position: relative;
    width: max-content;
    padding-left: 1em;

    &::before {
        content: "";
        position: absolute;
        top: 0.5em;
        bottom: 0;
        left: 0;
        width: 4px;
        background-color: var(--c-bg-3);
    }
}

.timeline-item {
    display: grid;
    justify-items: start;
    gap: 4px;
    margin: 0.5em 0;

    .timeline-item-date {
        font-size: 0.8em;
        color: var(--c-text-2);
    }

    .timeline-item-content {
        padding: 0.5em 0.8em;
        border-radius: 0.5em;
        background-color: var(--c-bg-3);
    }
}
</style>