<template>
        <nuxt-link :to="props.to" class="nav-element">
            <slot></slot>
        </nuxt-link>
        <!--<div>

        </div>-->
</template>

<script setup lang="ts">
const props = defineProps(['to']);
</script>

<style scoped lang="scss">
@import '~/assets/css/components/navitem.css';
</style>