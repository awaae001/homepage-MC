export default defineNuxtConfig({
    app: {
        rootId: 'z-root',
        head: {
            titleTemplate: '%s %separator NKeishi (@Oiolosse)',
            templateParams: {
                separator: '|',
            },
            link: [
                {
                    rel: 'icon',
                    href: 'https://image.m-c.top/?/images/2024/07/21/iyt3mhQCDe/b_a3f6e95501bcc4ce64c19c63a1211bcd.png',
                },
            ],
        },
    },
    components: [
        { path: '~/components/particle', prefix: 'Z' },
        { path: '~/components/zhilu', prefix: 'ZL' },
        '~/components',
    ],
    css: [
        '@/assets/main.scss',
    ],
    devtools: { enabled: false },
    experimental: {
        viewTransition: true,
    },
    srcDir: './',
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/variable.scss";',
                }
            }
        }
    },
    vue: {
        propsDestructure: true,
        runtimeCompiler: true
    },
    modules: [
        'nuxt-icon',
        'nuxt-simple-robots',
        'nuxt-site-config',
        '@nuxtjs/seo',
        '@nuxtjs/sitemap',
        '@pinia/nuxt',
    ],
    site: {
        url: 'https://zhilu.cyou',
    },
})
