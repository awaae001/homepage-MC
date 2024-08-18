<script setup>
const sidebarStore = useSidebarStore();
const themeStore = useThemeStore();
</script>

<template>
    <div id="z-header">
        <Icon name="ph:sidebar-duotone" id="toggle-sidebar" @click="sidebarStore.toggle" />
        <span class="header-text">{{ $route.meta.headerText }}</span>
        <!-- <Icon name="ph:moon-duotone" id="toggle-theme" @click="themeStore.toggle" /> -->
    </div>
</template>

<script>
/*
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = "https://umami.awaae001.top/random-string.js";
    script.defer = true;
    script.dataset.websiteId = "ccd6fb76-c91b-403b-bd79-c75b11102a56";
    document.head.appendChild(script);
  }
}
</script>
*/
<style scoped lang="scss">
#z-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: sticky;
    top: 0;
    height: 48px;
    padding-inline: 1rem;
    background-color: var(--c-bg-a50);
    backdrop-filter: blur(1rem);
    font-weight: 600;
    z-index: 1;

    .header-text {
        flex: 1;
    }
}

#toggle-sidebar {
    display: none;


    @media (max-width: $breakpoint-mobile) {
        display: block;
    }
}

.iconify {
    font-size: 1.5em;
    cursor: pointer;
}
</style>