<template>
  <div>
    <div class="justify-center align-center">
      <AppHeader></AppHeader>
    </div>
    <NuxtPage></NuxtPage>
    <AppFooter></AppFooter>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home | TSM Studios',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  script: [ { innerHTML: '' } ]
})
</script>

<style lang="scss">
</style>