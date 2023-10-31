<template>
  <Footer></Footer>
  <NavigationBar></NavigationBar>
  <div class="shadow-lg" id="__content">
    <NuxtPage></NuxtPage>
  </div>
  <div>
    Counter: {{ counter }}
    <button @click="counter = '+'">
      +
    </button>
    <button @click="counter = '-'">
      -
    </button>
  </div>
</template>

<script setup lang="ts">
const counter = useAccountUsername();

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