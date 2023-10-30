<template>
    <h1>Whoops!</h1>
    <h2>{{ error.statusCode }} - {{ error.statusMessage }}</h2>
    <p>Additional information: <br/>{{ error.message }}<br/>{{ error.description }}</p>
    <button @click="back">Back to home?</button>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})

const back = () => clearError({ redirect: '/' });
</script>

<style scoped lang="scss">
</style>