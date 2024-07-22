<script setup lang="ts">
useHead({ title: '' });
definePageMeta({
    alias: ['/'],
    title: '主页'
});
</script>

<template>
    <ZLAvatar class="avatar" />
    <div class="wrapper">
        <ZField label="<span style='font-size: 3rem;'>👋</span>">
            <div>
                <h1 style="font-size: 3rem;">你好，<br>我们是<mark>Oiolosse</mark></h1>
                <p class="desc">专业Minecraft服务器</p>
                <div>
                    <ZButton icon="ph:files-duotone" to="//blog.awaae001.top">博客</ZButton>
                    <ZButton icon="ri:qq-fill" to="https://qm.qq.com/q/yX3MBawIdG">QQ群</ZButton>
                </div>
            </div>
        </ZField>

        <ZField label="介绍">
            <p>
                一个非常离谱的MC服务器
            </p>
        </ZField>

        <ZField label="关于网站">
            <p>自2024年7月21日开始编写，目前还在修缮中。<br>
                Built with Nuxt.js and KazariEX.</p>
        </ZField>
    </div>
</template>

<style scoped lang="scss">
.avatar {
    position: fixed;
    opacity: 0.2;
    top: 0;
    right: 20vw;
    margin-right: -0.4em;
    font-size: min(100vw, 60vh);
    z-index: -1;
}

.desc {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: var(--c-text-a);
}
</style>