<template>
  <NavigationBar></NavigationBar>
  <div class="shadow-lg" id="__content">
    <NuxtPage></NuxtPage>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
useHead({
  title: 'Home | TSM Studios',
  meta: [
    { name: 'description', content: "Tout ce qu'un groupe d'amis a fait en étant bourré (je crois)" }
  ],
  script: [{ innerHTML: '' }]
});

const { data } = await useFetch('/api/key');
const key = data.value?.data;
console.log(`Retrieved public encryption key from server`);
</script>

<style lang="scss">
</style>