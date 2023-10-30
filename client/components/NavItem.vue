<template>
    <div class="flex flex-col justify-center parent">
        <nuxt-link :to="props.to" class="nav-element">
            <slot></slot>
        </nuxt-link>
        <div class="nav-border"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['to']);
</script>

<style scoped lang="scss">
@import '~/assets/css/components/navitem.css';
</style>