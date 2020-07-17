<template>
    <transition name="slide-fade" mode="out-in">
        <router-view :key="$route.fullPath"/>
    </transition>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style>
    .slide-up-enter {
        transform: translateY(10px); /* start 10px down*/
        opacity: 0;
    }

    .slide-up-enter-active {
        transition: all 0.2s ease;
    }
</style>
