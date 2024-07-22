<script setup lang="ts">
defineProps<{
    data: {
        name: string,
        badges?: Array<string>,
        nameAlt?: string,
        buttons: Array<{
            icon?: string,
            to?: string,
            text?: string
        }>,
        desc: string
        img?: string  // Ensure img is optional in the props
    };
}>();
</script>

<template>
    <li class="z-card">
        <div class="z-card-title">
            <h3 v-html="data.name"></h3>
            <span v-if="data.nameAlt" class="z-card-name-alt">{{ data.nameAlt }}</span>
            <div v-if="data.badges" class="badges">
                <ZBadge v-for="badge in data.badges" :key="badge">{{ badge }}</ZBadge>
            </div>
            <!-- 头像容器 -->
            <div v-if="data.img" class="z-card-avatar">
                <img :src="data.img" alt="Avatar Image">
            </div>
        </div>
        
        <div class="z-card-buttons">
            <template v-for="button in data.buttons" :key="button.text">
                <ZButton :icon="button.icon" :to="button.to">{{ button.text }}</ZButton>
            </template>
        </div>
        <ZRender :content="data.desc" tag="p"></ZRender>
    </li>
</template>

<style scoped>
.z-card {
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 1em;
    min-width: 240px;
    padding: 2em 1em;
    border-radius: 0.5em;
    position: relative; /* Ensure the z-index works for child elements */
}

.z-card-title {
    display: grid;
    align-content: center;
    gap: 2px;
    position: relative; /* This is important for absolute positioning inside it */
    height: 4em;
    text-align: center;
}

.z-card-buttons {
    text-align: center;
}

.z-card-name-alt {
    position: absolute;
    opacity: 0.1;
    inset: 0;
    font-size: 2em;
    font-weight: 900;
    text-align: center;
    z-index: -1; /* Behind the content */
}

.z-card-avatar {
    position: absolute; /* Place it over the title */
    bottom: -4em; /* Adjust to move it under the title */
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    z-index: -1; /* Ensure it’s behind other content */
    opacity: 0.45;
}

.z-card-avatar img {
    max-width: 100px; /* Adjust size as needed */
    height: auto; /* Maintain aspect ratio */
    border-radius: 50%; /* Optional: make it a circle */
}

p {
    text-align: justify;
}
</style>
