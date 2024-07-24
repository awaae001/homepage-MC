<script setup lang="ts">
useHead({ title: '站点' });
definePageMeta({ headerText: '一些网站' });

const toolSites = [
{
        name: 'NKeishi', nameAlt: '服务器腐竹',
        desc: '本服务器的腐竹，他特别擅长跑路、摸鱼、玩原神、画大饼。被玩家誉为：“四好腐竹！”',
        img: 'https://image.m-c.top/?/images/2024/07/22/KWkNScFU0L/NKeishi.png',
    },{
        name: 'agx7993', nameAlt: '服务器管理员',
        desc: '此用户没有提供任何有关于自己的信息，这里的信息是为了保证显示正常，此为占位符',
        img: 'https://image.m-c.top/?/images/2024/07/22/ijrSocPc0k/agx7993.png',
    },{
        name: 'MoLiang3025', nameAlt: '服务器管理员',
        desc: '此用户没有提供任何有关于自己的信息，这里的信息是为了保证显示正常，此为占位符',
        img: 'https://image.m-c.top/?/images/2024/07/22/5UwG3oCRQv/main.png',
    },{
        name: 'On_KING', nameAlt: '服务器管理员',
        desc: '此用户没有提供任何有关于自己的信息，这里的信息是为了保证显示正常，此为占位符',
        img: 'https://image.m-c.top/?/images/2024/07/22/5UwG3oCRQv/main.png',
    }
];

const orgSites = [
{
        name: 'dreamy250', nameAlt: '初生肝帝',
        desc: '被誉为服务器内最肝的男人，以学生的身份参与到服务器的建设当中',
        img: 'https://image.m-c.top/?/images/2024/07/22/9CMSCtkAWp/dreamy250.png',
    },{
        name: 'Wuzi6', nameAlt: '下北泽的鸡',
        desc: '什么都会的南通，但是只想摸鱼的一只鸡，在服务器励志撅遍所有的成员',
        img: 'https://image.m-c.top/?/images/2024/07/22/4GnWSkF1zo/Wuzi6.png',
    },{
        name: 'LAN-SCALE', nameAlt: '岚鳞岚师傅',
        desc: 'LAN-SCALE可以叫岚鳞岚师傅，或者龙龙，是一个龙控（喜欢龙），会一点点生电，建筑，小萌新一个，平时高强度在服务器干活（挂机）',
        img: 'https://image.m-c.top/?/images/2024/07/22/9v1iRawssi/LAN_SCALE.png',
    },{
        name: 'awaae001', nameAlt: '最大摸鱼王',
        desc: '服务器最大摸鱼王、死亡榜常年霸榜者，最菜的人，服务器公认尼哥。常年只进语音，不玩服务器',
        img: 'https://image.m-c.top/?/images/2024/07/22/go46Vs3lV2/awaae001.png',
    },{
        name: 'xxc333', nameAlt: '',
        desc: '此用户没有提供任何有关于自己的信息，这里的信息是为了保证显示正常，此为占位符',
        img: 'https://image.m-c.top/?/images/2024/07/23/LNuJwBC6ZT/xxc333.png',
    },{
        name: 'Camellialovesher', nameAlt: '',
        desc: '此用户没有提供任何有关于自己的信息，这里的信息是为了保证显示正常，此为占位符',
        img: 'https://image.m-c.top/?/images/2024/07/23/tDpEv8Muuo/Camellialovesher.png',
    },
    /** 
    {
        name: '方块茶话会', nameAlt: 'Block Tea Reception',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://btr.thisis.host/' },
        ],
        desc: '宝鸡中学校内的 Minecraft 爱好群体，由 <ZLink icon="ph:github-logo-duotone" to="https://github.com/guuguai/">古古怪怪GuuGuai </ZLink> 于2020年7月17日建立。帮助文档网站于2022年6月12日建立，并于2024年2月21日迁移。'
    }
    **/

];
</script>

<template>
    <ZTitle>管理员</ZTitle>
    <ZCardList :data-list="toolSites" />

    <ZTitle>玩家list</ZTitle>
    <ZCardList :data-list="orgSites" />
</template>

<style scoped lang="scss">
</style>